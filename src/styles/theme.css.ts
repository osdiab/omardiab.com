import { assignVars, createThemeContract, style } from "@vanilla-extract/css";

export const colors = {
  offWhite: "#f6f6f6",
  skyBlue: "#1dced8",
  deepBlue: "#000249",
  brightOrange: "#f6490d",
  brighterOrange: "#ff7d50",
  paleOrange: "#f97e53",
  lightGray: "#cccccc",
  mediumGray: "#888888",
  darkGray: "#666666",
  offBlack: "#2a2a2a",
};

export const themeVars = createThemeContract({
  background: "",
  text: { body: "", secondary: "" },
  primary: { normal: "", highlight: "" },
  border: { light: "" },
});
const lightThemeVars = assignVars(themeVars, {
  background: colors.offWhite,
  text: {
    body: colors.offBlack,
    secondary: colors.darkGray,
  },
  primary: {
    normal: colors.brightOrange,
    highlight: colors.brighterOrange,
  },
  border: { light: colors.lightGray },
});
export const lightThemeCss = style({ vars: lightThemeVars });

const darkThemeVars = assignVars(themeVars, {
  background: colors.offBlack,
  text: {
    body: colors.offWhite,
    secondary: colors.lightGray,
  },
  primary: {
    normal: colors.brighterOrange,
    highlight: colors.brightOrange,
  },
  border: { light: colors.darkGray },
});
export const darkThemeCss = style({ vars: darkThemeVars });

export const preferredThemeCss = style([
  {
    vars: lightThemeVars,
    "@media": { "(prefers-color-scheme: dark)": { vars: darkThemeVars } },
  },
]);
