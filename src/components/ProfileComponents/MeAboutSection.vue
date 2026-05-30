<template>
  <!-- base container -->
  <div class="flex gap-5 border-b border-b-white/20 py-7 px-2 text-white">
    <div
      class="w-20 h-20 border border-neutral-800 rounded-full bg-gray-400/10 flex items-center justify-center font-medium text-white/60 text-3xl"
    >
      {{ getNameLetters(userStore.user?.name) }}
    </div>

    <!-- profile info -->
    <div>
      <!-- name -->
      <div class="text-xl text-amber-50 font-bold">
        <h2>{{ userStore.user.name }}</h2>
      </div>

      <!-- email -->
      <div class="text-white/60 text-sm my-1 font-mono mb-2">
        <p>{{ userStore.user.email }}</p>
      </div>

      <!-- specific additional info -->
      <div class="flex gap-2 items-center text-sm opacity-60">
        <p class="text-xs">Joined in {{ userStore.user.joinedAt }}</p>
        <p
          class="bg-gray-100/10 py-0.5 px-2 border border-gray-100/20 font-medium rounded"
        >
          {{ userStore.user.type }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/getUser";

const userStore = useUserStore();

const getNameLetters = (name) => {
  if (!name || typeof name !== "string") {
    return "";
  }
  let letters = name[0];
  const splits = name.split(" ");
  if (splits.length > 1) {
    letters += splits[1][0];
  }
  return letters;
};
</script>
