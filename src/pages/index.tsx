import Head from "next/head";
import { css } from "@emotion/react";
import * as React from "react";
import { DefaultLayout } from "src/components/DefaultLayout";
import { pageSectionCss } from "src/styles/pageSection";
import { NextPage } from "next";
import { palette } from "src/styles/palette";
import { Link, LinkProps } from "src/components/Link";

const bannerTitleCss = css`
  font-size: 2rem;
  font-weight: 700;
  max-width: 80%;
  margin: auto;
  text-align: center;
`;

const workHistorySectionCss = css`
  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
  > ul {
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    justify-items: center;
    list-style-type: none;
    margin: -24px;
    > li {
      margin: 24px;

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
      <main>{props.description}</main>
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
    description: <p>Meow</p>,
  },
  {
    companyName: "Clever",
    companyTagline:
      "The most widely used single sign‑on platform for K–12 education.",
    companyUrl: "https://www.clever.com",
    jobTitle: "Full-stack Software Engineer",
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
          He also evangelized modern web-development practices, helping Clever
          cement its reputation as a leader in education technology.
        </p>
      </>
    ),
  },
  {
    companyName: "Backplane",
    companyTagline: "Niche social networks with purpose.",
    jobTitle: "Full-stack Software Engineering Intern",
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

const HomePage: NextPage = () => {
  return (
    <DefaultLayout mainCss={mainCss}>
      <Head>
        <title>Omar Diab</title>
      </Head>
      <section>
        <p css={bannerTitleCss}>
          I design and implement simple, powerful, and easily maintainable
          products, from start to finish.
        </p>
      </section>
      <section css={workHistorySectionCss}>
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
};

export default HomePage;
