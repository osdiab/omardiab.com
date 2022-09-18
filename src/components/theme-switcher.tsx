import classNames from "classnames";
import * as React from "react";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { hyperlinkCss } from "../styles/hyperlink.css";
import { darkThemeCss, lightThemeCss } from "../styles/theme.css";
import {
  switcherButtonCss,
  switcherCss,
  switcherIconCss,
} from "./theme-switcher.css";
export function ThemeSwitcher({
  selected,
  path,
}: {
  selected?: "light" | "dark";
  path: string;
}) {
  const [preference, setPreference] = useState<"light" | "dark">();
  useEffect(() => {
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const darkListener = (e: MediaQueryListEvent) =>
      e.matches && setPreference("dark");
    darkMedia.addEventListener("change", darkListener);
    const lightMedia = window.matchMedia("(prefers-color-scheme: light)");
    const lightListener = (e: MediaQueryListEvent): false | void =>
      e.matches && setPreference("light");
    lightMedia.addEventListener("change", lightListener);
    return () => {
      darkMedia.removeEventListener("change", darkListener);
      lightMedia.removeEventListener("change", lightListener);
    };
  }, []);
  const target = (selected ?? preference) === "dark" ? "light" : "dark";
  return (
    <form
      action="/theme"
      method="post"
      className={classNames(
        target === "dark" ? darkThemeCss : lightThemeCss,
        switcherCss
      )}
    >
      <input type="hidden" name="theme" value={target} />
      <input type="hidden" name="path" value={path} />
      <button
        type="submit"
        className={classNames(hyperlinkCss, switcherButtonCss)}
      >
        {target === "dark" ? (
          <IoMoonOutline className={switcherIconCss} />
        ) : (
          <IoSunnyOutline className={switcherIconCss} />
        )}
      </button>
    </form>
  );
}
