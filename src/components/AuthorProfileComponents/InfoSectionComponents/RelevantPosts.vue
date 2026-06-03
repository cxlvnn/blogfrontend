<template>
  <div v-if="authorStore.recentPosts" class="flex flex-col my-8 text-white">
    <div class="text-sm my-2 font-bold text-neutral-500 pb-2">
      <p>RECENT WRITING</p>
    </div>
    <div class="flex flex-col">
      <div
        v-for="post in authorStore.recentPosts"
        :key="post.id"
        class="border-b border-b-white/20 last:border-b-0 py-5"
      >
        <p class="text-xs/tight tracking-widest opacity-60">
          {{ post.createdAt }}
        </p>
        <p class="py-2 font-bold">{{ post.title }}</p>
        <p class="text-sm opacity-60 truncate">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthorStore } from "@/stores/getAuthor";

const authorStore = useAuthorStore();
</script>
