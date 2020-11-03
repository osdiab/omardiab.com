import * as React from "react";

import { pageSectionCss } from "src/styles/pageSection";
import { css } from "@emotion/core";
import Link from "next/link";

const infoSectionCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;
const contactSectionCss = [
  pageSectionCss,
  css`
    padding-bottom: 2rem;
    align-self: flex-start;
  `,
];
export const Footer = (): JSX.Element => (
  <footer>
    <section css={contactSectionCss} id="contact">
      <h2>Get in touch</h2>
      <p>
        Feel free to{" "}
        <Link href="mailto://hello@omardiab.com">shoot me an email</Link>
        {" or "}
        <Link href="https://linkedin.com/in/osdiab">check my LinkedIn</Link>.
      </p>
    </section>
    <section css={infoSectionCss}>
      <p>
        Like this site? Feel free to{" "}
        <Link href="https://github.com/osdiab/osdiab.github.io/">
          fork it on Github
        </Link>{" "}
        and make it your own.
      </p>
      <p>Omar Diab, {new Date().getFullYear()}</p>
    </section>
  </footer>
);