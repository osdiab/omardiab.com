import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [preact()]
});