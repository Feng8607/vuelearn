<template>
  <div>字數:{{ msgCount }}</div>
</template>

<script setup>
  import { computed } from "@vue/reactivity";
  import { watch } from "vue";

  const emit = defineEmits(["update"]);

  const props = defineProps({
    data: {
      type: String,
      default: "",
    },
  });
  const msgCount = computed(() => {
    return props.data.length;
  });
  watch(msgCount, (newValue) => {
    emit("updata", newValue);
  });
</script>

<style></style>
