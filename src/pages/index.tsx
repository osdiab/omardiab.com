import Head from "next/head";
import { css } from "@emotion/react";
import * as React from "react";
import { DefaultLayout } from "src/components/DefaultLayout";
import { pageSectionCss } from "src/styles/pageSection";
import { NextPage } from "next";

const bannerTitleCss = css`
  font-size: 2rem;
  font-weight: 700;
  max-width: 80%;
  margin: auto;
  text-align: center;
`;

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Omar Diab</title>
      </Head>
      <main css={pageSectionCss}>
        <p css={bannerTitleCss}>
          I design and implement simple, powerful and easily maintainable
          products from start to finish.
        </p>
      </main>
    </DefaultLayout>
  );
};

export default HomePage;
