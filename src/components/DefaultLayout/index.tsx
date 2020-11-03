import * as React from "react";
import { Footer } from "src/components/DefaultLayout/Footer";
import { Header } from "src/components/DefaultLayout/Header";

export const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
