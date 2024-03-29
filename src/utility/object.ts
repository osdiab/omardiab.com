// when used as generic, this is understandable
// eslint-disable-next-line @typescript-eslint/ban-types
export function mapValues<Obj extends {}, Value>(
  obj: Obj,
  mapper: (value: Obj[keyof Obj], key: keyof Obj) => Value
): Record<keyof Obj, Value> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      mapper(value as Obj[keyof Obj], key as keyof Obj),
    ])
  ) as Record<keyof Obj, Value>;
}

/**
 * Ensures the object has least one key present and not undefined
 *
 * @see {@link https://stackoverflow.com/a/49725198}
 */
export type AtLeastOneKeyPresent<
  Obj,
  Keys extends keyof Obj = keyof Obj
> = Pick<Obj, Exclude<keyof Obj, Keys>> &
  {
    [K in Keys]-?: Required<Pick<Obj, K>> &
      Partial<Pick<Obj, Exclude<Keys, K>>>;
  }[Keys];

// when used as generic, this is understandable
// eslint-disable-next-line @typescript-eslint/ban-types
export function omitKeys<Obj extends {}, Keys extends keyof Obj>(
  obj: Obj,
  toOmit: Keys[]
): Omit<Obj, Keys> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !(toOmit as string[]).includes(key))
  ) as Omit<Obj, Keys>;
}
