export default defineNuxtPlugin({
  name: 'nuxt-plugin',
  hooks: {
    'page:start' (page) {
      console.log('page:start', page)
    },
    'page:finish' (page) {
      console.log('page:finish', page)
    }
  },
})