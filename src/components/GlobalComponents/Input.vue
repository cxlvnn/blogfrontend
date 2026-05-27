<template>
  <label class="block font-medium">{{ title }}</label>
  <input
    type="{{ type }}"
    name="{{ name }}"
    class="border border-white/20 focus:border-neutral-500 outline-none min-w-full p-2 my-2 rounded"
    :placeholder
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
  placeholder: {
    type: String,
    default: "",
  },
  title: String,
});
</script>
