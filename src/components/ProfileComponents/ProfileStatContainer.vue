<template>
  <div class="flex flex-row justify-center gap-5 my-4">
    <!-- posts count for route profile -->
    <div
      v-show="routeProfile()"
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ user.postCount }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">POSTS</p>
    </div>

    <!-- streak count for route me -->
    <div
      v-show="routeMe()"
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ streak }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">STREAK</p>
    </div>

    <!-- read count for both routes -->
    <div
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ user.readCount }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">READS</p>
    </div>

    <!-- number of years since joined for route profile -->
    <div
      v-show="routeProfile()"
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ user.joinedAt }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">JOINED</p>
    </div>

    <!-- saved count for route me -->
    <div
      v-show="routeMe()"
      class="bg-neutral-900/90 rounded-md py-5 text-white text-center flex-1 border border-gray-100/10"
    >
      <h2 class="font-medium text-xl">{{ savedCount }}</h2>
      <p class="text-xs tracking-widest opacity-60 mt-2">SAVED</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const props = defineProps({
  user: Object,

  postCount: Number,
  readCount: Number,
  joined: Number,

  savedCount: Number,
  streak: Number,
});

const routeProfile = () => {
  const route = useRoute();
  return route.path === "/profile";
};

const routeMe = () => {
  const route = useRoute();
  return route.path === "/me";
};
</script>
