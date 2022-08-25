import { AtLeastOneKeyPresent, mapValues, omitKeys } from "../utility/object";

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
const mediaSizeMinWidths: Record<
  Exclude<MediaSize, MediaSize.PHONE_SMALL>,
  number
> = {
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
  [key in Exclude<MediaSize, MediaSize.DESKTOP_LARGE>]: Exclude<
    MediaSize,
    MediaSize.PHONE_SMALL
  >;
} = {
  [MediaSize.PHONE_SMALL]: MediaSize.PHONE_MEDIUM,
  ...mapValues(
    omitKeys(mediaSizeMinWidths, [MediaSize.DESKTOP_LARGE]),
    (_, key) =>
      minWidthsAsc[
        minWidthsAsc.findIndex(([searchKey]) => searchKey === key) + 1
      ]?.[0] as Exclude<MediaSize, MediaSize.PHONE_SMALL>
  ),
};

/**
 * Specifies screen sizes that code should be applicable to
 */
export type MediaQueryConstraint = AtLeastOneKeyPresent<{
  /**
   * Min screen size that should match a given media query, inclusive
   */
  min: Exclude<MediaSize, MediaSize.PHONE_SMALL>;
  /**
   * Max screen size that should match a given media query, inclusive
   */
  max: Exclude<MediaSize, MediaSize.DESKTOP_LARGE>;
}>;

function maxWidthForMediaSize(
  mediaSize: Exclude<MediaSize, MediaSize.DESKTOP_LARGE>
): number {
  return mediaSizeMinWidths[mediaSizeNextLargest[mediaSize]];
}

/**
 * Scope a style to a min or max media size
 *
 * @params props.min Minimum screen size that matches the query, inclusive
 * @params props.max Maximum screen size that matches the query, inclusive
 * @returns key for a media query constraint corresponding to the query, e.g.
 * "min-width: 100px and max-width 200px"
 */
export function mediaQueryConstraint(constraint: MediaQueryConstraint): string {
  const minBound = constraint.min
    ? `min-width: ${mediaSizeMinWidths[constraint.min]}px`
    : undefined;
  const maxBound = constraint.max
    ? `max-width: ${maxWidthForMediaSize(constraint.max)}px`
    : undefined;
  return [minBound, maxBound].filter((s): s is string => !!s).join(" and ");
}
