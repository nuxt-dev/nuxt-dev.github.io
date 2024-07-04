export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Navigation: ${from.fullPath} - ${to.fullPath}`);
})