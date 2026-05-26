<template>
  <div class="flex flex-col gap-2 text-white/40">
    <RouterLink :to> <i><-</i> {{ message }} </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: String,
  message: String,
});
</script>
