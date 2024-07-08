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
import { ClientOnly } from '#build/components';

// useHead({});
// useSeoMeta({});
</script>
