import { globalStyle, style } from "@vanilla-extract/css";
import { fontWeights, textSizeObjects } from "./text";
import { themeVars } from "./theme.css";

// 🔽 modern-normalize in vanilla-extract
globalStyle("*, ::before, ::after", { boxSizing: "border-box" });

globalStyle("html", { tabSize: 4 });

globalStyle("html", { lineHeight: 1.15, WebkitTextSizeAdjust: "100%" });

globalStyle("body", { margin: 0 });

// i edited this global font style
globalStyle("html, body", {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
});

globalStyle("hr", { height: 0, color: "inherit" });

globalStyle("abbr[title]", { textDecoration: "underline dotted" });

globalStyle("b, strong", { fontWeight: "bolder" });

globalStyle("code, kbd, samp, pre", {
  fontFamily:
    'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
});

globalStyle("small", { fontSize: "80%" });

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", { bottom: "-0.25em" });

globalStyle("sup", { top: "-0.5em" });

globalStyle("table", { textIndent: 0, borderColor: "inherit" });

globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
});

globalStyle("button, select", { textTransform: "none" });

globalStyle(`button, [type="button"], [type="reset"], [type="submit"]`, {
  WebkitAppearance: "button",
});

globalStyle("::-moz-focus-inner", { borderStyle: "none", padding: 0 });

globalStyle(":-moz-focusring", { outline: "1px dotted ButtonText" });

globalStyle(":-moz-ui-invalid", { boxShadow: "none" });

globalStyle("legend", { padding: 0 });

globalStyle("progress", { verticalAlign: "baseline" });

globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

globalStyle('[type="search"]', {
  WebkitAppearance: "textfield",
  outlineOffset: "-2px",
});

globalStyle("::-webkit-search-decoration", { WebkitAppearance: "none" });

globalStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});

globalStyle("summary", { display: "list-item" });
// 🔼 modern-normalize in vanilla-extract

// my own extra global styles
globalStyle("*", {
  margin: 0,
  padding: 0,
});
globalStyle("p", textSizeObjects.s);
globalStyle("h1", textSizeObjects.xxl);
globalStyle("h2", textSizeObjects.xl);
globalStyle("h3", textSizeObjects.l);
globalStyle("b", { fontWeight: fontWeights.bold });

export const mainCss = style({
  minHeight: "100vh",
  color: themeVars.text.body,
  background: themeVars.background,
});
