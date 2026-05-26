<template>
  <div class="flex flex-row justify-center gap-5 my-4">
    <div
      class="bg-gray-400/10 rounded py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ postCount }}</h2>
      <p class="text-sm tracking-widest opacity-60 mt-2">POSTS</p>
    </div>
    <div
      class="bg-gray-400/10 rounded py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ readCount }}</h2>
      <p class="text-sm tracking-widest opacity-60 mt-2">READS</p>
    </div>
    <div
      class="bg-gray-400/10 rounded py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ joined }}</h2>
      <p class="text-sm tracking-widest opacity-60 mt-2">YEARS</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  postCount: Number,
  readCount: Number,
  joined: Number,
});
</script>
