<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <NuxtImg src="https://www.baidu.com/img/doodlegaokaokaohou_5b0f886d182bfd1761854cb4dfa72fa8.gif" />
    <NuxtLink 
      v-for="app in apps" 
      :key="app.id"
      :to="`/app/${app.id}`"
      >
      {{ app.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data: apps } = await useFetch("/api/app/list");
console.log(`Apps: ${JSON.stringify(apps.value)}`);
</script>
