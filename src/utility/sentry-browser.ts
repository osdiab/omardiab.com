import * as Sentry from "@sentry/react";

const dsn = process.env.PUBLIC_SENTRY_DSN;

export function initSentryBrowser() {
  if (typeof window !== "undefined" && dsn) {
    Sentry.init({ dsn, release: import.meta.env.PUBLIC_SENTRY_RELEASE });
  }
}
