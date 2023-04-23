<template>
  <button @click="showCompA = !showCompA">toggle</button>
  <br />
  <button @click="count++">add num</button>
  {{ count }}
  <CompA v-if="showCompA" />
</template>

<script setup>
  import CompA from "./componentA.vue";
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref,
  } from "vue";
  const count = ref(0);
  const showCompA = ref(true);
  onBeforeMount(() => {
    console.log("app:before mount");
  });
  onMounted(() => {
    console.log("compA:mounted");
  });
  onBeforeUpdate(() => {
    console.log("compA:before update");
  });
  onUpdated(() => {
    console.log("app:updated");
  });
</script>

<style></style>
