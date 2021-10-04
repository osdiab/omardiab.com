import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import { AtLeastOneKeyPresent, mapValues, omitKeys } from "src/utility/object";

export enum MediaSize {
  DESKTOP_LARGE = "DESKTOP_LARGE",
  DESKTOP_SMALL = "DESKTOP_SMALL",
  TABLET = "TABLET",
  PHONE_LARGE = "PHONE_LARGE",
  PHONE_MEDIUM = "PHONE_MEDIUM",
  PHONE_SMALL = "PHONE_SMALL",
}
/**
 * Min sizes for the media size, measured in px
 */
const mediaSizeMinWidths: {
  [key in Exclude<MediaSize, MediaSize.PHONE_SMALL>];
} = {
  [MediaSize.DESKTOP_LARGE]: 1440,
  [MediaSize.DESKTOP_SMALL]: 1024,
  [MediaSize.TABLET]: 768,
  [MediaSize.PHONE_LARGE]: 425,
  [MediaSize.PHONE_MEDIUM]: 375,
};
const minWidthsAsc = Object.entries(mediaSizeMinWidths).sort(
  ([, sizeAPx], [, sizeBPx]) => sizeAPx - sizeBPx
) as [Exclude<MediaSize, MediaSize.PHONE_SMALL>, number][];
const mediaSizeNextLargest: {
  [key in Exclude<MediaSize, MediaSize.DESKTOP_LARGE>]: MediaSize;
} = {
  [MediaSize.PHONE_SMALL]: MediaSize.PHONE_MEDIUM,
  ...mapValues(
    omitKeys(mediaSizeMinWidths, [MediaSize.DESKTOP_LARGE]),
    (_, key) =>
      minWidthsAsc[
        minWidthsAsc.findIndex(([searchKey]) => searchKey === key) + 1
      ][0]
  ),
};

/**
 * Specifies screen sizes that code should be applicable to
 */
export type MediaQueryConstraint = AtLeastOneKeyPresent<{
  /**
   * Min screen size that should match a given media query, inclusive
   */
  min: Exclude<MediaSize, "phoneSmall">;
  /**
   * Max screen size that should match a given media query, inclusive
   */
  max: Exclude<MediaSize, "desktopLarge">;
}>;

function maxWidthForMediaSize(
  mediaSize: Exclude<MediaSize, "desktopLarge">
): number {
  return mediaSizeMinWidths[mediaSizeNextLargest[mediaSize]];
}

/**
 * Scope a style to a min or max media size
 *
 * @params props.min Minimum screen size that matches the query, inclusive
 * @params props.max Maximum screen size that matches the query, inclusive
 */
export function cssForMediaSize(
  props: {
    css: CSSInterpolation;
  } & MediaQueryConstraint
): CSSInterpolation {
  const minBound = props.min
    ? `min-width: ${mediaSizeMinWidths[props.min]}px`
    : undefined;
  const maxBound = props.max
    ? `max-width: ${maxWidthForMediaSize(props.max)}px`
    : undefined;
  const mediaQuery = [minBound, maxBound]
    .filter((s): s is string => !!s)
    .join(" and ");
  return css`
    @media (${mediaQuery}) {
      ${props.css};
    }
  `;
}
