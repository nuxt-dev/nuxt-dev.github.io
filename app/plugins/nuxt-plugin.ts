export default defineNuxtPlugin((nuxt) => {
  nuxt.hooks.hook("page:start", (page) => {
    console.log("page:start", page);
  });
});
