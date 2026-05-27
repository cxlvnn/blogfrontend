<template>
  <label class="block">{{title}}</label>
  <textarea
    class="border border-white/20 focus:border-neutral-500 rounded min-w-full min-h-50 p-2 my-2 outline-none"
    :name
    :placeholder
  ></textarea>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>
