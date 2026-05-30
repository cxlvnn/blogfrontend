<template>
  <div class="flex flex-col my-8 text-white">
    <div class="text-sm my-1 font-bold text-neutral-500 pb-2">
      <p>READING HISTORY</p>
    </div>
    <div class="flex flex-col">
      <div
        v-for="post in posts"
        :key="post.id"
        class="flex justify-between items-center text-neutral-200 border-b border-b-white/20 last:border-b-0 py-5"
      >
        <p class="py-2">
          <RouterLink
            class="hover:text-blue-400 transition-colors"
            :to="`/posts/${post.id}`"
          >
            {{ post.title }}
          </RouterLink>
        </p>
        <p class="text-sm font-mono text-neutral-400">{{ post.lastRead }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const posts = [
  {
    id: 1,
    title: "Designing for Scalability from Day One",
    lastRead: "2 days ago",
  },
  {
    id: 2,
    title: "The Case for Static",
    lastRead: "1 week ago",
  },
  {
    id: 3,
    title: "Typography as Interface",
    lastRead: "3 weeks ago",
  },
];
</script>
