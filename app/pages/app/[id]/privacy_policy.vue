<template>
    <div>
      <h1>{{ app?.title }}</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  // useHead({});
  // useSeoMeta({});
  
  const route = useRoute();
  console.log(route.params.id);
  
  const { data: app } = await useFetch(`/api/app/info?id=${route.params.id}`);
  // const title = computed(() => app.value?.title);
  </script>
  