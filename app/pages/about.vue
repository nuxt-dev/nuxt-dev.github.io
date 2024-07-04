<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "About",
  meta: [
    { name: 'description', content: 'This is the aboutpage' }
  ],
});
definePageMeta({
  layout: "custom",
});
</script>