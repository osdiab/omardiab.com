import { init as initSentry } from "@sentry/node";

const dsn = process.env.PUBLIC_SENTRY_DSN;
export function initSentryServer() {
  if (typeof window === "undefined" && dsn) {
    initSentry({ dsn });
  }
}
