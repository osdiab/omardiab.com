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
});
const lightTheme = assignVars(themeVars, {
  background: colors.offWhite,
  text: {
    body: colors.offBlack,
    secondary: colors.darkGray,
  },
  primary: {
    normal: colors.brightOrange,
    highlight: colors.brighterOrange,
  },
});
const darkTheme = assignVars(themeVars, {
  background: colors.offBlack,
  text: {
    body: colors.offWhite,
    secondary: colors.lightGray,
  },
  primary: {
    normal: colors.brighterOrange,
    highlight: colors.brightOrange,
  },
});

export const themeCss = style({
  vars: lightTheme,
  "@media": { "(prefers-color-scheme: dark)": { vars: darkTheme } },
});
