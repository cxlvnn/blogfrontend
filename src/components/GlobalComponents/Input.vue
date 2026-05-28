<template>
  <div class="flex flex-col gap-1.5">
    <label class="text-sm font-medium text-neutral-300">{{ title }}</label>
    <input
      :type
      v-model="name"
      class="rounded-md border border-white/15 bg-neutral-900/40 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 outline-none transition duration-200 focus:border-blue-500/50 focus:bg-neutral-900/60 w-full"
      :placeholder
      :required
    />
  </div>
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
