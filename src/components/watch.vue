<template>
  <input type="text" v-model="text.levels.text" />
  <input type="text" v-model="text.label" />
</template>

<script setup>
  import { ref } from "@vue/reactivity";
  import { watch, watchEffect } from "@vue/runtime-core";
  const text = ref({
    levels: {
      text: "",
    },
    label: "",
  });

  //watch跟watchEffect兩個最大不同是watch是手動去指定要監聽的變數，
  //watchEffect是自動去監聽變數
  //watchEffect事件監聽
  const stop = watchEffect(() => {
    console.log(text.value.levels.text, text.value.label);
    if (text.value.label == "stop") stop(); //當輸入stop時可以取消監聽，可以自己設定stop的內容
  });

  //watch監聽事件
  //假如物件內容很龐大時，建議使用指定監聽
  //因為深層監聽是把務檢所有都跑一遍，會造成很大的負擔
  //e代表新的資料，olddata代表舊的資料
  //pseudocode watch(監聽物件,(資料，舊資料)=>{監聽後要執行指令})
  watch(
    [() => text.value.levels.text, () => text.value.label], //指定監聽，多重指定監聽
    (e, oldData) => {
      console.log(e, oldData);
    },
    { deep: true } //深層監聽，deep是watch裡比較實用的option，使用時機是當你的資料是物件，且是多層式結構，就要使用deep，才能監聽到
    //但因為這個deep監聽是屬於遞迴，在效能上有很大的爭議，當物件龐大時建議還是指定監聽
  );
</script>

<style></style>
