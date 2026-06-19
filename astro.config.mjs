// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  image: {
    // See https://docs.astro.build/en/guides/images/#image-options & https://docs.astro.build/en/reference/configuration-reference/#image-options for more information.
    layout: "constrained",
    responsiveStyles: true,
  }
});
