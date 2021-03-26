/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
// Use the SentryWebpack plugin to upload the source maps during build step
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
  VERCEL_GIT_COMMIT_SHA,
} = process.env;
process.env.SENTRY_DSN = SENTRY_DSN;
const basePath = "";

module.exports = {
  target: "serverless",
  productionBrowserSourceMaps: true,
  env: {
    // Make the COMMIT_SHA available to the client so that Sentry events can be
    // marked for the release they belong to. It may be undefined if running
    // outside of Vercel
    NEXT_PUBLIC_COMMIT_SHA: VERCEL_GIT_COMMIT_SHA,
  },
  webpack: (config, options) =>
    merge(
      config,
      {
        module: {
          rules: [
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    // if you don't use ../ it will put it inside ".next" folder by default
                    outputPath: "../public/assets/",
                    publicPath: "/assets/",
                  },
                },
              ],
            },
            { test: /\.svg$/, use: ["@svgr/webpack"] },
          ],
        },
        plugins: [
          new options.webpack.DefinePlugin({
            "process.env.NEXT_IS_SERVER": JSON.stringify(
              options.isServer.toString()
            ),
          }),
        ],
      },
      !options.isServer
        ? { resolve: { alias: { "@sentry/node": "@sentry/browser" } } }
        : {},
      SENTRY_DSN &&
        SENTRY_ORG &&
        SENTRY_PROJECT &&
        SENTRY_AUTH_TOKEN &&
        VERCEL_GIT_COMMIT_SHA &&
        NODE_ENV === "production"
        ? {
            plugins: [
              new SentryWebpackPlugin({
                include: ".next",
                ignore: ["node_modules"],
                stripPrefix: ["webpack://_N_E/"],
                urlPrefix: `~${basePath}/_next`,
                release: VERCEL_GIT_COMMIT_SHA,
              }),
            ],
          }
        : {}
    ),
  basePath,
};
