<template>
  <div class="flex flex-col gap-10 text-white py-15 border-b border-b-white/20">
    <div class="text-3xl font-bold">
      <h1>
        {{ post.title }}
      </h1>
      <div class="text-sm font-mono mt-2 text-white/50">
        <p>{{ post.date }}</p>
      </div>
    </div>
    <div class="text-white">
      <p v-html="post.content"></p>
    </div>
  </div>
</template>

<script setup>
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
