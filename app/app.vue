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
console.log(`apiResp: ${apiResp.status.value} - ${JSON.stringify(apiResp.data.value)}`);

// const androidAppResp = await useFetch(
//   "/api/app?platform=android&package_name=com.android.chrome",
// );
// console.log(
//   `Android App Resp: ${androidAppResp.status.value} - ${JSON.stringify(androidAppResp.data.value)}`,
// );

// const iosAppResp = await useFetch(
//   "/api/app?platform=ios&bundle_id=com.google.chrome.ios",
// );
// console.log(
//   `iOS App Resp: ${iosAppResp.status.value} - ${JSON.stringify(iosAppResp.data.value)}`,
// );

const appsResp = await useFetch("/api/app/list");
console.log(`Apps Resp: ${appsResp.status.value} - ${JSON.stringify(appsResp.data.value)}`);
</script>
