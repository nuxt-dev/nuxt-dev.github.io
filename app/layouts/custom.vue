<template>
  <div>
    <p>Custom</p>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<!-- <script setup lang="ts">
useHead({
  title: "My Amazing Site",
  meta: [
    { name: 'description', content: 'This is the homepage' }
  ],
});
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script> -->