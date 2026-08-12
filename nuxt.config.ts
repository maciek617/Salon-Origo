// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { P } from "vue-router/dist/index-BN0B0y8a.js";

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
    url: "https://salonorigo.pl/",
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
      link: [
        // Basic favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // Standard sizes
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },

        // Apple devices
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },

        // Android devices
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },

        // Web App Manifest
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        // Theme colors for mobile browsers
        { name: "theme-color", content: "#000000" },
        { name: "msapplication-TileColor", content: "#000000" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://salonorigo.pl/",
    },
  },
});
