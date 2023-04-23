<template>
  <p v-for="(text, key, index) in dataList">
    <span v-show="key != 'key3'"> {{ index }}索引{{ key }}:{{ text }} </span>
  </p>
  <p class="tes-cl" :key="test">{{ test }}</p>
</template>

<script setup>
  import { ref } from "vue";
  const test = ref("popo");
  const dataList = {
    key1: "a",
    key2: "b",
    key3: "c",
  };
  setTimeout(() => {
    test.value = "apple";
  }, 8000);
</script>

<style>
  .tes-cl {
    animation-name: cross;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes cross {
    from {
      background-color: aqua;
      top: 5;
      transform: translate(0, 20px);
      opacity: 0;
    }
    to {
      opacity: 1;
      background-color: red;
      transform: translate(0, 0);
    }
  }
</style>
