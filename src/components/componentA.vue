<template>
  <button v-on:click="changeView(1)">顯示雙向綁定</button>
  <button @click="changeView(2)">顯示單向綁定</button>
  <button @click="changeView(5)">沒畫面</button>
  <button @click="changeView(4)">v-show</button>
  <div v-if="view == 1">
    <p>資料綁定</p>
    <p>{{ data }}</p>
  </div>
  <div v-else-if="view == 2">
    <input type="text" v-model="test" />
    <p>{{ test }}</p>
  </div>
  <div v-show="view == 4">顯示沒畫面</div>
</template>

<script setup>
  import { ref } from "@vue/reactivity";
  const data = 55;
  const test = ref("123");
  const view = ref(1);
  const changeView = (item) => {
    view.value = item;
    console.log(view.value);
  };
</script>

<style></style>
