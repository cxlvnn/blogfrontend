<template>
  <div
    v-show="authorStore.author"
    class="flex flex-row justify-center gap-5 my-4"
  >
    <!-- posts count -->
    <div
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ authorStore.author.postCount }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">POSTS</p>
    </div>

    <!-- read count -->
    <div
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ authorStore.author.readCount }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">READS</p>
    </div>

    <!-- number of years since joined -->
    <div
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ authorStore.author.joinedAt }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">JOINED</p>
    </div>
  </div>
</template>

<script setup>
import { useAuthorStore } from "@/stores/getAuthor";

const authorStore = useAuthorStore();
</script>
