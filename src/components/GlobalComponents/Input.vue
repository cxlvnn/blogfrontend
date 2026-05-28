<template>
  <label class="block font-medium">{{ title }}</label>
  <input
    :type
    v-model="name"
    class="border border-white/20 focus:border-neutral-500 outline-none min-w-full p-2 my-2 rounded"
    :placeholder
    :required
  />
</template>

<script setup>
const name = defineModel();
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },

  placeholder: {
    type: String,
    default: "",
  },

  title: String,

  required: {
    type: Boolean,
    default: false,
  },
});
</script>
