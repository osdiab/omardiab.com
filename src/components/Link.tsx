import * as React from "react";
import { useRouter } from "next/router";
import RouterLink, { LinkProps as RouterLinkProps } from "next/link";
import { css } from "@emotion/react";
import externalLinkSvg from "src/assets/icons/external-link.svg";

import { logger } from "src/utility/logger";
import { palette } from "src/styles/palette";
import { Svg } from "react-optimized-image";
import { format } from "url";

export enum LinkAppearance {
  HYPERLINK = "HYPERLINK",
  UNSTYLED = "UNSTYLED",
}

export interface LinkProps extends React.PropsWithChildren<RouterLinkProps> {
  appearance?: LinkAppearance;
}

const hyperlinkCss = css`
  display: inline-block; // prevents wrapping unless necessary
  color: ${palette.primary};
  transition: color 0.1s ease-in;

  &:hover,
  &:focus {
    color: ${palette.primaryHighlight};
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

const externalLinkCss = css`
  height: 0.75em;
  margin-left: 0.25em;
`;

const AbsoluteLink = ({ href, appearance, children }: LinkProps) => {
  const hrefStr = format(href);

  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return (
        <a css={hyperlinkCss} href={hrefStr}>
          {children}
          <Svg css={externalLinkCss} src={externalLinkSvg} />
        </a>
      );
    case LinkAppearance.UNSTYLED:
      return (
        <a css={unstyledLinkCss} href={hrefStr}>
          {children}
        </a>
      );
  }
};

const RelativeLink = ({ href: hrefUrl, appearance, children }: LinkProps) => {
  const router = useRouter();
  const href =
    typeof hrefUrl === "string"
      ? hrefUrl
      : [hrefUrl.pathname || router.pathname, hrefUrl.search, hrefUrl.hash]
          .filter(Boolean)
          .join("");
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

function urlIsRelative(url: LinkProps["href"]): boolean {
  if (typeof url === "string") {
    return url.startsWith("/"); // for the purposes of this app, this works
  }
  return Boolean(url.host || url.hostname);
}

/**
 * A link to external content.
 */
export const Link = (props: LinkProps): JSX.Element => {
  return urlIsRelative(props.href) ? (
    <RelativeLink {...props} />
  ) : (
    <AbsoluteLink {...props} />
  );
};
