<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">

const resp = await useFetch('/api');
console.log(`resp: ${resp.status.value} - ${resp.data.value}`);

</script>