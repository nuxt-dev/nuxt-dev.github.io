// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ---

  $production: {},
  $development: {},

  // ---

  devtools: {
    enabled: true,
  },
  app: {
    // baseURL: "",
    // cdnURL: "",
    head: {
      // htmlAttrs: {
      //   lang: "zh-CN",
      // },
      // titleTemplate: "%s - Nuxt.js",
    },
  },

  // ---

  plugins: [],
  modules: ["@nuxt/eslint", "@nuxt/image", "nuxt-og-image"],
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
        arrowParens: true,
        braceStyle: "1tbs",
      },
    },
  },
  image: {
    // provider: "static",
    // static: {},
  },

  // ---

  alias: {},

  // ---

  hooks: {},

  // ---

  runtimeConfig: {
    app: {},
    nitro: {},
    public: {},
  },
  appConfig: {},
  devServer: {},
  future: {
    compatibilityVersion: 4,
  },
  features: {},
  experimental: {
    // payloadExtraction: true, // 决定是否生成 payload.json/payload.js
  },
  generate: {
    // routes: [],
  },
  nitro: {
    // preset: "static",
  },
  routeRules: {},
  router: {},
  
  // ---

  typescript: {
    typeCheck: true,
    // strict: false,
  },

  // ---

  vite: {},
});