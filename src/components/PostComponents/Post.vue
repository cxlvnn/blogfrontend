<template>
  <div class="flex flex-col gap-2 text-white py-8 border-b border-b-white/20">
    <div class="text-xs text-white/70">
      <p>{{ post.date }}</p>
    </div>
    <div class="text-xl font-bold">
      <h2>
        <RouterLink :to class="hover:text-green-600 transition-colors">
          {{ post.title }}
        </RouterLink>
      </h2>
    </div>
    <div class="text-sm text-white/70">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
const post = defineProps({
  date: String,
  title: String,
  content: String,
  to: {
    type: String,
    default: "",
  },
});
</script>
