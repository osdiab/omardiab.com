import * as React from "react";
import { css } from "@emotion/core";

import { Link, LinkAppearance } from "src/components/Link";
import { logger } from "src/utility/logger";
import { palette } from "src/theme/palette";

export enum ButtonTargetKind {
  LINK = "LINK",
  FUNCTION = "FUNCTION",
  SUBMIT = "SUBMIT",
}

export enum ButtonRole {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TEXT_ONLY = "TEXT_ONLY",
}

export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export interface OnClickShape<Kind extends ButtonTargetKind, action> {
  kind: Kind;
  action: action;
}

export type OnClick =
  | OnClickShape<ButtonTargetKind.LINK, string>
  | OnClickShape<ButtonTargetKind.FUNCTION, () => void>
  | OnClickShape<ButtonTargetKind.SUBMIT, undefined>;

export interface ButtonProps {
  onClick: OnClick;
  size?: ButtonSize;
  disabled?: boolean;
  role?: ButtonRole;
}

type StyledButtonProps = Pick<
  Required<ButtonProps>,
  "size" | "disabled" | "role"
>;

function borderColor(params: { role: ButtonRole; focus: boolean }): string {
  const { role, focus } = params;
  switch (role) {
    case ButtonRole.PRIMARY:
    case ButtonRole.SECONDARY:
      return focus ? palette.primaryHighlight : palette.primary;
    case ButtonRole.TEXT_ONLY:
      return "transparent";
  }
}

function backgroundColor(params: { role: ButtonRole; focus: boolean }): string {
  const { role, focus } = params;
  switch (role) {
    case ButtonRole.PRIMARY:
      return focus ? palette.primaryHighlight : palette.primary;
    case ButtonRole.SECONDARY:
    case ButtonRole.TEXT_ONLY:
      return "transparent";
  }
}

function fontColor(params: { role: ButtonRole; focus: boolean }): string {
  const { role, focus } = params;
  switch (role) {
    case ButtonRole.PRIMARY:
      return palette.whiteText;
    case ButtonRole.SECONDARY:
    case ButtonRole.TEXT_ONLY:
      return focus ? palette.primaryHighlight : palette.primary;
  }
}

const makeButtonCss = (props: StyledButtonProps) => css`
  display: inline-block;
  border: 2px solid;
  border-color: ${borderColor({ ...props, focus: false })};
  border-radius: 2px;
  padding: 10px 20px;
  background-color: ${backgroundColor({ ...props, focus: false })};
  font-size: ${buttonFontSize(props.size)};
  font-weight: 700;
  appearance: none;
  color: ${fontColor({ ...props, focus: false })};
  transition: background-color 0.1s ease-in, border-color 0.1s ease-in,
    color 0.1s ease-in;

  :hover,
  :focus,
  :active {
    border-color: ${borderColor({ ...props, focus: true })};
    background-color: ${backgroundColor({ ...props, focus: true })};
    color: ${fontColor({ ...props, focus: true })};
    cursor: ${props.disabled ? "not-allowed" : "pointer"};
  }
`;

function logInvalidTargetKind(onClick: never) {
  logger.error(
    `Invalid button target kind ${(onClick as OnClick).kind}. Not rendering.`
  );
}

function logInvalidSize(size: never) {
  logger.error(`Invalid button size '${size}'. Rendering as medium size.`);
}

function buttonFontSize(size: ButtonProps["size"]) {
  switch (size) {
    default:
      logInvalidSize(size);
    // fallthrough
    case undefined:
    case ButtonSize.MEDIUM:
      return "1.2rem";
    case ButtonSize.SMALL:
      return "1rem";
    case ButtonSize.LARGE:
      return "1.4rem";
  }
}

export const Button = (
  props: React.PropsWithChildren<ButtonProps>
): JSX.Element => {
  const {
    onClick,
    size = ButtonSize.MEDIUM,
    disabled = false,
    role = ButtonRole.PRIMARY,
    children,
  } = props;
  const buttonCss = makeButtonCss({ size, role, disabled });

  switch (onClick.kind) {
    case ButtonTargetKind.LINK: {
      const linkContent = <div css={buttonCss}>{children}</div>;
      if (disabled) {
        return linkContent;
      }

      return (
        <Link appearance={LinkAppearance.UNSTYLED} to={onClick.action}>
          {linkContent}
        </Link>
      );
    }
    case ButtonTargetKind.SUBMIT:
      return (
        <button css={buttonCss} disabled={disabled} type="submit">
          {children}
        </button>
      );
    case ButtonTargetKind.FUNCTION:
      return (
        <button css={buttonCss} disabled={disabled} onClick={onClick.action}>
          {children}
        </button>
      );
    default:
      logInvalidTargetKind(onClick);
      return <React.Fragment />;
  }
};
