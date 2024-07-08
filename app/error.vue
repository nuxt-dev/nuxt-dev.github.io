<template>
  <div>
    <div>
      <h1>{{ error?.message }}</h1>
      There was an error 😱
      <br />
      <button @click="handleError">Clear error</button>
      <br />
      <NuxtLink to="/"> Navigate home </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});

function handleError() {
  clearError({ redirect: "/" });
}
</script>
