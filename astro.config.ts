import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["modern-normalize"],
    },
  },
});
