<template>
  <h1>Compute</h1>
  <p>{{ text }}</p>
  <input type="text" v-model="text" />
  <br />
  <input type="number" v-model="num" />
  <h3>{{ numformat }}</h3>
</template>

<script setup>
  import { computed, ref } from "vue";
  const num = ref(0);
  const text = ref("Hello world");
  const numformat = computed(() => {
    console.log("change");
    if (Number.isNaN(num.value * 100)) return num;
    return `${num.value * 5}%`;
  });
  // console.log(num.value);
  // const numformat = () => {
  //   console.log(123);
  // };
</script>

<style></style>
