<script setup lang="ts">
// useHead({});
// useSeoMeta({});

const route = useRoute();
console.log(route.params.id);

const appResp = await useFetch(`/api/app/info?id=${route.params.id}`);
console.log(`App Resp: ${appResp.status.value} - ${JSON.stringify(appResp.data.value)}`);
</script>
