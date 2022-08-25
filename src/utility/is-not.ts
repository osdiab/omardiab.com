/**
 * Higher-order function that produces a type guard enforcing that the input
 * value doesn't match the ones to exclude; useful for narrowing types,
 * especially in calls to `Array.filter()`
 * @param toExclude set of values to check
 */
export function isNot<Value, ToExclude extends Value>(
  ...toExclude: ToExclude[]
): (value: Value) => value is Exclude<Value, ToExclude> {
  return (value): value is Exclude<Value, ToExclude> =>
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    !(toExclude as Value[]).includes(value);
}
