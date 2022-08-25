import { globalCss } from "@stitches/react";
import { palette } from "../palette";

export const appStyles = globalCss({
  "html, body": {
    minHeight: "100vh",
    color: palette.bodyText,
    background: palette.background,
  },
});
