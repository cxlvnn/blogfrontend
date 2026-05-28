<template>
  <label class="block">{{ title }}</label>
  <textarea
    class="border border-white/20 focus:border-neutral-500 rounded min-w-full min-h-50 p-2 my-2 outline-none"
    v-model="name"
    :placeholder
  ></textarea>
</template>

<script setup>
const name = defineModel();
const props = defineProps({
  title: String,
  placeholder: {
    type: String,
    default: "",
  },
});
</script>
