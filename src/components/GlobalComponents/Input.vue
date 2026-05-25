<template>
  <label class="block">{{title}}</label>
  <input
    type="{{ type }}"
    name="{{ name }}"
    class="border border-white/20 focus:border-green-800 outline-none min-w-full p-2 my-2 rounded"
  />
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  title: String,
});
</script>
