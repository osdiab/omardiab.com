import * as React from "react";
import type { ComponentProps } from "react";
import isAbsoluteUrl from "is-absolute-url";
import { IoOpenOutline } from "react-icons/io5";
import {
  hyperlinkCss,
  hyperlinkPrefixCss,
  hyperlinkSuffixCss,
} from "../styles/hyperlink.css";
import classNames from "classnames";

export interface LinkProps extends Omit<ComponentProps<"a">, "prefix"> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function Link({
  href,
  children,
  className,
  prefix,
  suffix: inputSuffix,
  ...rest
}: LinkProps) {
  const absolute = !!href && isAbsoluteUrl(href);
  const targetProps = absolute ? { target: "_blank", rel: "noreferrer" } : {};
  const suffix = inputSuffix || (absolute ? <IoOpenOutline /> : null);
  return (
    <a
      href={href}
      className={classNames(hyperlinkCss, className)}
      {...targetProps}
      {...rest}
    >
      {prefix && <span className={hyperlinkPrefixCss}>{prefix}</span>}
      <span>{children}</span>
      <span className={hyperlinkSuffixCss}>{suffix}</span>
    </a>
  );
}
