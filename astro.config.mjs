import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap"; // ← Ajoutez cette ligne

export default defineConfig({
  site: "https://besma-info-energy.vercel.app",
  trailingSlash: "never",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "ar"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: "rewrite",
    },
    fallback: {
      en: "fr",
      ar: "fr",
    },
  },
  integrations: [sitemap()], // ← Ajoutez cette ligne
});