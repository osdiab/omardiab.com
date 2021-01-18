import { css, Interpolation, Theme } from "@emotion/react";
import * as React from "react";
import { Footer } from "src/components/DefaultLayout/Footer";
import { Header } from "src/components/DefaultLayout/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
  mainCss?: Interpolation<Theme>;
}
export const DefaultLayout = ({
  children,
  mainCss,
}: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main
        css={[
          css`
            padding-bottom: 10rem;
          `,
          mainCss,
        ]}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
