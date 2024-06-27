<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// useHead({});
// useSeoMeta({});

const appConfig = useAppConfig();
console.log(appConfig.theme);

const apiResp = await useFetch("/api");
console.log(
  `apiResp: ${apiResp.status.value} - ${JSON.stringify(apiResp.data.value)}`,
);

const androidAppResp = await useFetch(
  "/api/app?platform=android&package_name=com.android.chrome",
);
console.log(
  `appResp: ${androidAppResp.status.value} - ${JSON.stringify(androidAppResp.data.value)}`,
);

const iosAppResp = await useFetch(
  "/api/app?platform=ios&package_name=com.google.chrome.ios",
);
console.log(
  `appResp: ${iosAppResp.status.value} - ${JSON.stringify(iosAppResp.data.value)}`,
);
</script>
