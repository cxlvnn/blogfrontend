<template>
  <div class="flex flex-col my-7 text-white">
    <div class="text-sm my-1 font-bold text-neutral-500 pb-2">
      <p>BOOKMARKS</p>
    </div>
    <div class="flex flex-col">
      <div
        v-for="bookmark in bookmarks"
        :key="bookmark.id"
        class="flex justify-between items-center text-neutral-200 border-b border-b-white/20 last:border-b-0 py-5"
      >
        <p class="py-2">
          <RouterLink
            class="hover:text-blue-400 transition-colors"
            :to="`/posts/${bookmarks.bookmarkedPostId}`"
          >
            {{ bookmark.bookmarkedPostTitle }}
          </RouterLink>
        </p>
        <p class="text-sm font-mono text-neutral-400">
          {{ bookmark.bookmarkedAt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/getUser";
import { RouterLink } from "vue-router";

const userStore = useUserStore();

const bookmarks = userStore.user.relationships.bookmarks;
</script>
