<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  // title: "My Amazing Site",
  titleTemplate: (title) => (title ? `${title} | My Amazing Site` : "My Amazing Site"),
  meta: [{ name: "description", content: "This is the homepage" }],
});
useSeoMeta({
  // title: "My Amazing Site",
  // description: "This is my amazing site, let me tell you all about it.",
  ogTitle: "My Amazing Site",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogType: "website",
  ogSiteName: "My Amazing Site",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>
