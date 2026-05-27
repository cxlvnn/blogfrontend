<template>
  <div class="flex flex-col text-white border-b border-b-white/20">
    <div class="text-3xl font-bold">
      <h1>
        {{ post.title }}
      </h1>
      <div class="text-sm tracking-wide font-normal mt-2 text-white/50">
        <p>{{ post.date }}</p>
      </div>
    </div>
    <div class="flex py-13 text-white">
      <p v-html="post.content"></p>
    </div>
  </div>
</template>

<script setup>
const post = defineProps({
  date: String,
  title: String,
  content: String,
});
</script>
