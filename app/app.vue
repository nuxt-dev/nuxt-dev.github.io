<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
// useHead({});
// useSeoMeta({});

const appConfig = useAppConfig();
console.log(appConfig.theme);

const resp = await useFetch("/api");
console.log(`resp: ${resp.status.value} - ${resp.data.value}`);
</script>
