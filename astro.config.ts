import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [preact({ compat: true }), mdx()],
});
