<template>
  <div>
    <RouterLink
      class="flex w-fit py-1 px-2 bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 hover:cursor-pointer items-center gap-2 text-neutral-500 hover:text-neutral-400 transition-colors"
      :to
    >
      <i class="pi pi-chevron-circle-left"></i>
      <p>{{ message }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    type: String,
    default: "",
    required: false,
  },
  message: String,
});
</script>
