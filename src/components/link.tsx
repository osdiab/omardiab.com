import * as React from "react";
import type { ComponentProps } from "react";
import isAbsoluteUrl from "is-absolute-url";
import { IoOpenOutline } from "react-icons/io5";
import { hyperlinkCss, hyperlinkSuffixCss } from "../styles/hyperlink.css";
import classNames from "classnames";

export type LinkProps = ComponentProps<"a">;
export function Link({ href, children, className, ...rest }: LinkProps) {
  const suffix = href && isAbsoluteUrl(href) ? <IoOpenOutline /> : null;
  return (
    <a href={href} className={classNames(hyperlinkCss, className)} {...rest}>
      <span>{children}</span>
      <span className={hyperlinkSuffixCss}>{suffix}</span>
    </a>
  );
}
