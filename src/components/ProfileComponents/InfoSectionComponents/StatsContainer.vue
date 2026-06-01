<template>
  <div class="flex flex-row justify-center gap-5 my-4">
    <!-- streak count -->
    <div
      class="bg-neutral-900/90 hover:bg-neutral-900/60 hover:border-gray-300/10 transition-colors rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ userStore.user.streak }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">STREAK</p>
    </div>

    <!-- read count -->
    <div
      class="bg-neutral-900/90 hover:bg-neutral-900/60 hover:border-gray-300/10 transition-colors rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ userStore.user.readCount }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">READS</p>
    </div>

    <!-- saved count -->
    <div
      class="bg-neutral-900/90 hover:bg-neutral-900/60 hover:border-gray-300/10 transition-colors rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ userStore.user.bookmarkCount }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">SAVED</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/getUser";

const userStore = useUserStore();
</script>
