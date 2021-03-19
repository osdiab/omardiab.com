/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");

module.exports = {
  target: "serverless",
  webpack: (config) =>
    merge(config, {
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
    }),
};
