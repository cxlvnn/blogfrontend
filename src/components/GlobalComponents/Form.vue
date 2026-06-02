<template>
  <div class="flex flex-col mt-10 mb-7 w-full max-w-xl mx-auto px-6">
    <h2 v-if="title" class="text-center text-neutral-100 text-2xl font-bold mb-8">{{ title }}</h2>
    <form :action :method class="flex flex-col gap-4" @submit.prevent="$emit('submit', $event)">
      <slot></slot>
    </form>
  </div>
</template>

<script setup>
defineEmits(["submit"]);
const props = defineProps({
  action: String,
  method: String,
  title: String,
});
</script>
