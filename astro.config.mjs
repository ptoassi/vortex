// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://vortexfrig.vercel.app",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  adapter: vercel()
});