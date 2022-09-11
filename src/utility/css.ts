type MaybeClassName = string | undefined | null | false;

export function joinClasses(...values: MaybeClassName[]): string {
  return values.filter(Boolean).join(" ");
}
