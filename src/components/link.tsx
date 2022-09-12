import * as React from "react";
import type { ComponentProps } from "react";
import isAbsoluteUrl from "is-absolute-url";
import { IoOpenOutline } from "react-icons/io5";
import { stackCss } from "../styles/spacing";
import { hyperlinkCss } from "../styles/hyperlink";
import { joinClasses } from "../utility/css";
import { css } from "../../stitches.config";

export type LinkProps = ComponentProps<"a">;
export function Link({ href, children, className, ...rest }: LinkProps) {
  const suffix = href && isAbsoluteUrl(href) ? <IoOpenOutline /> : null;
  return (
    <a
      href={href}
      className={joinClasses(
        css(
          hyperlinkCss,
          stackCss({
            flexDirection: "row",
            gap: "0.25ch",
            display: "inline-flex",
          })
        )(),
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {suffix}
    </a>
  );
}
