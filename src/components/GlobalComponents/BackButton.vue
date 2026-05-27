<template>
  <div>
    <RouterLink
      class="text-neutral-500 hover:text-blue-400 transition-colors"
      :to
    >
      &larr; {{ message }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: String,
  message: String,
});
</script>
