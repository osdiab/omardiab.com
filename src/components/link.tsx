import type { ComponentProps } from "react";
import isAbsoluteUrl from "is-absolute-url";
import { IoOpenOutline } from "react-icons/io5";
import { stackCss } from "../styles/spacing";
import { hyperlinkCss } from "../styles/hyperlink";

export type LinkProps = ComponentProps<"a">;
export function Link({ href, children, className, ...rest }: LinkProps) {
  const suffix = href && isAbsoluteUrl(href) ? <IoOpenOutline /> : null;
  return (
    <a
      href={href}
      className={[
        hyperlinkCss,
        stackCss({
          flexDirection: "row",
          gap: "0.25ch",
          display: "inline-flex",
        }),
        className,
      ].join(" ")}
      {...rest}
    >
      <span>{children}</span>
      {suffix}
    </a>
  );
}
