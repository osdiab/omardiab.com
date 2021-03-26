import { NextPage } from "next";
import Error from "next/error";

const NotFound: NextPage = () => {
  // Opinionated: do not record an exception in Sentry for 404
  return <Error statusCode={404} />;
};

export default NotFound;
