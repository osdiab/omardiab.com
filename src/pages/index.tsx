import Head from "next/head";
import { css } from "@emotion/react";
import * as React from "react";
import { DefaultLayout } from "src/components/DefaultLayout";
import { pageSectionCss } from "src/styles/pageSection";
import { NextPage } from "next";
import { palette } from "src/styles/palette";
import { Link, LinkProps } from "src/components/Link";
import { compositionTextCss } from "src/styles/global/text";
import { textSizeCss } from "src/styles/text";
import { spacing, wrappingHorizontalStackCss } from "src/styles/spacing";

const bannerTitleCss = [
  textSizeCss.xl,
  css`
    max-width: 80%;
  `,
];

const workHistorySectionCss = css`
  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
  > ul {
    ${wrappingHorizontalStackCss.xxxl};
    max-width: 1000px;
    justify-content: center;
    align-items: start;
    list-style-type: none;
    > li {
      flex-basis: calc(50% - ${spacing.xxxl});
      min-width: 250px;
      width: 100%;
      max-width: 450px;
      flex-shrink: 0;
      flex-grow: 1;

      > * {
        display: block;
        &:not(span):not(:last-child) {
          margin-bottom: 2.5rem;
        }
      }
      dl {
        display: grid;
        grid-template-columns: 1fr 1fr;

        > div:not(:last-child) {
          margin-right: 8px;
        }
        dt,
        dd {
          font-size: 1rem;
        }
        dt {
          color: ${palette.secondaryText};
          margin-bottom: 4px;
        }
      }
    }
  }
`;

interface JobMetadataProps {
  jobTitle: string;
  timeAtJob: string;
}
function JobMetadata(props: JobMetadataProps) {
  return (
    <dl>
      <div>
        <dt>Title</dt>
        <dd>{props.jobTitle}</dd>
      </div>
      <div>
        <dt>Time</dt>
        <dd>{props.timeAtJob}</dd>
      </div>
    </dl>
  );
}

interface JobListingProps extends JobMetadataProps {
  companyName: string;
  companyTagline: string;
  companyUrl?: LinkProps["href"];
  description: React.ReactNode;
}

const jobListingHeaderCss = css`
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  hgroup {
    > *:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;
function JobListing(props: JobListingProps) {
  return (
    <React.Fragment>
      <header css={jobListingHeaderCss}>
        <hgroup>
          <h3>
            {props.companyUrl ? (
              <Link href={props.companyUrl}>{props.companyName}</Link>
            ) : (
              props.companyName
            )}
          </h3>
          <h4>{props.companyTagline}</h4>
        </hgroup>
        <JobMetadata {...props} />
      </header>
      <main css={compositionTextCss}>{props.description}</main>
    </React.Fragment>
  );
}

const mainCss = css`
  > * {
    ${pageSectionCss};
    &:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }
`;

const JOBS: JobListingProps[] = [
  {
    companyName: "Every.org",
    companyTagline:
      "Donate to any charity and share your learnings to advance good.",
    companyUrl: "https://www.every.org",
    jobTitle: "Cofounder and Head of Engineering",
    timeAtJob: "2018-present",
    description: (
      <>
        <p>
          Every.org is the easiest way to give to any nonprofit, and seeks to
          make giving a central part of everyone&rsquo;s day to day lives.
        </p>
        <p>
          Along with being a driving force in its product and design, Omar
          trained his engineering team to become experts in the modern web
          development stack. He ensures that Every.org products can rapidly
          evolve, while remaining technically robust and easily understandable.
        </p>
      </>
    ),
  },
  {
    companyName: "Clever",
    companyTagline:
      "The most widely used single sign‑on platform for K–12 education.",
    companyUrl: "https://www.clever.com",
    jobTitle: "Full-Stack Software Engineer",
    timeAtJob: "2013-2016",
    description: (
      <>
        <p>
          <b>
            Omar co-implemented{" "}
            <Link href="https://clever.com/products/badges">Clever Badges</Link>
          </b>
          : the simplest way for young students to log into educational
          services. Young children have trouble remembering passwords, so Clever
          Badges lets them log in with QR codes instead.
        </p>
        <p>
          Focusing on empowering students and teachers, he built out core
          functionality, analyzed and maintained server capacity, and
          evangelized modern web-development practices, helping Clever cement
          its reputation as a leader in education technology.
        </p>
      </>
    ),
  },
  {
    companyName: "Backplane",
    companyTagline: "Niche social networks with purpose.",
    jobTitle: "Backend Software Engineering Intern",
    timeAtJob: "2011-2013",
    description: (
      <p>
        As an early backend engineer, Omar helped build the technical
        infrastructure for hundreds of thousands of fans to connect with Lady
        Gaga on her social network, Little Monsters.
      </p>
    ),
  },
];

const HomePage: NextPage = () => (
  <DefaultLayout mainCss={mainCss}>
    <Head>
      <title>Omar Diab</title>
    </Head>
    <section>
      <p css={bannerTitleCss}>
        I design and implement simple, powerful, and maintainable products, from
        start to finish.
      </p>
    </section>
    <section id="workHistory" css={workHistorySectionCss}>
      <h2>Work history</h2>
      <ul>
        {JOBS.map((job, index) => (
          <li key={index}>
            <JobListing {...job} />
          </li>
        ))}
      </ul>
    </section>
  </DefaultLayout>
);

export default HomePage;
