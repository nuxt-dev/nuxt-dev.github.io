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
    head: {
      // htmlAttrs: {
      //   lang: "zh-CN",
      // },
      // titleTemplate: "%s - Nuxt.js",
    },
  },

  // ---

  plugins: [],
  modules: ["@nuxt/eslint", "@nuxt/image"],
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
  experimental: {},
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