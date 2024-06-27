// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {},
  $development: {},
  runtimeConfig: {
    app: {},
    nitro: {},
    public: {},
  },
  nitro: {
    // preset: "static",
  },
  app: {
    head: {
      // htmlAttrs: {
      //   lang: 'zh-CN',
      // },
      // titleTemplate: '%s - Nuxt.js',
      // meta: [
      //   { charset: 'utf-8' },
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // ],
    },
  },
  routeRules: {},
  generate: {
    // routes: [],
  },
  modules: [
    "@nuxt/eslint", 
    "@nuxt/image",
  ],
  devtools: {
    enabled: true,
  },
  typescript: {
    typeCheck: true,
    // strict: false
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {},
  eslint: {
    config: {
      stylistic: {
        quotes: 'double',
        semi: true,
      },
    },
  },
});