<template>
  <div>
    <h1>{{ app?.title }}</h1>

    <NuxtLink :to="`/app/${route.params.id}/privacy_policy`">
      Privacy Policy
      <br />
    </NuxtLink>
    <NuxtLink :to="`/app/${route.params.id}/terms_of_use`">
      Terms Of Use
      <br />
    </NuxtLink>
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
