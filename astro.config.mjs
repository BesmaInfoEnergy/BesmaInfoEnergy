import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://besma-info-energy.vercel.app",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "ar"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
