// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxtjs/seo", "@nuxt/image"],

  site: {
    url: "https://twoj-salon.pl",
    name: "Origo",
    description: "Salon fryzjerski w Gdańsku.",
    defaultLocale: "pl",
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "pl",
      },
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://twoj-salon.pl",
    },
  },
});
