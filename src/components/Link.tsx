import isRelativeUrl from "is-relative-url";
import * as React from "react";
import RouterLink, { LinkProps as RouterLinkProps } from "next/link";
import { css } from "@emotion/core";

import { logger } from "src/utility/logger";
import { palette } from "src/styles/palette";

export enum LinkAppearance {
  HYPERLINK = "HYPERLINK",
  UNSTYLED = "UNSTYLED",
}

interface BaseLinkProps {
  href: string;
  appearance?: LinkAppearance;
}
export type LinkProps = React.PropsWithChildren<BaseLinkProps>;

const hyperlinkCss = css`
  color: ${palette.primary};
  font-weight: 700;
  transition: color 0.1s ease-in;

  :hover {
    color: ${palette.primary};
  }
`;
const unstyledLinkCss = css`
  text-decoration: none;
  color: inherit;
`;

function logInvalidAppearance(appearance: never) {
  logger.error(
    `Invalid link appearance: '${appearance}'. Rendering as hyperlink.`
  );
}

const AbsoluteLink = ({ href: href, appearance, children }: LinkProps) => {
  const props = { href, children };
  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return <a css={hyperlinkCss} {...props} />;
    case LinkAppearance.UNSTYLED:
      return <a css={unstyledLinkCss} {...props} />;
  }
};

const RelativeLink = ({ href, appearance, children }: LinkProps) => {
  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return (
        <RouterLink href={href}>
          <a css={hyperlinkCss}>{children}</a>
        </RouterLink>
      );
    case LinkAppearance.UNSTYLED:
      return (
        <RouterLink href={href}>
          <a css={unstyledLinkCss}>{children}</a>
        </RouterLink>
      );
  }
};

/**
 * A link to external content.
 */
export const Link = (props: LinkProps): JSX.Element => {
  return isRelativeUrl(props.href) ? (
    <RelativeLink {...props} />
  ) : (
    <AbsoluteLink {...props} />
  );
};
