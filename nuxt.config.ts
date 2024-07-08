// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ---

  $production: {},
  $development: {},

  // ---

  site: {
    url: "https://nuxt-dev.github.io",
    trailingSlash: true,
  },

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
      // link: [
      //   { rel: "icon", type: "image/png", href: "/icon.png" },
      // ],
    },
  },

  // ---

  plugins: [],
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
  ],
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
  sitemap: {
    exclude: [
      "/app/*/privacy_policy",
      "/app/*/terms_of_use",
    ],
  },
  robots: {
    groups: [
      {
        comment: ["Allow all bots to crawl all content"],
        userAgent:["*"],
        disallow: [
          "/app/*/privacy_policy",
          "/app/*/terms_of_use",
        ],
        allow: ["/"],
      },
    ],
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
  appConfig: {
    apps: [
      {
        id: "chrome",
        android: {
          package_name: "com.android.chrome",
        },
        ios: {
          bundle_id: "com.google.chrome.ios",
        },
      },
      {
        id: "firefox",
        android: {
          package_name: "org.mozilla.firefox",
        },
        ios: {
          bundle_id: "org.mozilla.ios.Firefox",
        },
      },
    ],
  },
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