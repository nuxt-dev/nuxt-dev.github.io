// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    app: {},
    nitro: {},
    public: {},
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
  modules: ['@nuxt/eslint'],
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
        quotes: 'single',
      },
    },
  },
});
