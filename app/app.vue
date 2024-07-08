<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->

    <!-- <NuxtLoadingIndicator /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <UNotifications/>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// useHead({});
// useSeoMeta({});
</script>
