// Webpack config actually loads @sentry/browser if in browser, similar API
// means this works. See next.config.js for details
import * as SentryNode from "@sentry/node";
import { NextPageContext, NextPage } from "next";
import NextErrorComponent, { ErrorProps as NextErrorProps } from "next/error";

interface MyErrorProps {
  statusCode: number;
  hasGetInitialPropsRun: boolean;
  error: NextPageContext["err"];
}
const MyError: NextPage<MyErrorProps> = ({
  statusCode,
  hasGetInitialPropsRun = false,
  error,
}) => {
  if (!hasGetInitialPropsRun && error) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    SentryNode.captureException(error);
    // Flushing is not required in this case as it only happens on the client
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async ({ res, err: error, asPath }) => {
  const nextErrorInitialProps: NextErrorProps = await NextErrorComponent.getInitialProps(
    { res, err: error } as NextPageContext
  );

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  const errorInitialProps = {
    ...nextErrorInitialProps,
    hasGetInitialPropsRun: true,
    error,
  };

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (error) {
    SentryNode.captureException(error);

    // Flushing before returning is necessary if deploying to Vercel, see
    // https://vercel.com/docs/platform/limits#streaming-responses
    await SentryNode.flush(2000);

    return errorInitialProps;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  SentryNode.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );
  await SentryNode.flush(2000);

  return errorInitialProps;
};

export default MyError;
