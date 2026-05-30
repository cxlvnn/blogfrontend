<template>
  <!-- base container -->
  <div
    v-if="authorStore.author"
    class="flex gap-5 border-b border-b-white/20 py-7 px-2 text-white"
  >
    <div
      class="w-20 h-20 border border-neutral-800 rounded-full bg-gray-400/10 flex items-center justify-center font-medium text-white/60 text-3xl"
    >
      {{ getNameLetters(authorStore.author.name) }}
    </div>

    <!-- profile author info -->
    <div>
      <!-- name -->
      <div class="text-xl text-amber-50 font-bold">
        <h2>{{ authorStore.author.name }}</h2>
      </div>

      <!-- email -->
      <div class="text-white/60 text-sm my-1 font-mono mb-2">
        <p>{{ authorStore.author.email }}</p>
      </div>

      <!-- bio -->
      <div class="mb-5">
        <p v-show="authorStore.author.bio">
          {{ authorStore.author.bio }}
        </p>
        <p v-show="!authorStore.author.bio" class="text-neutral-600">
          No bio yet
        </p>
      </div>

      <!-- additional info -->
      <div class="flex flex-row gap-3 text-sm [&_span]:opacity-100">
        <span
          >📍
          <p class="inline opacity-60">
            {{ authorStore.author.address }}
          </p></span
        >
        <span
          >🔗
          <p class="inline opacity-60">
            {{ authorStore.author.website }}
          </p></span
        >
        <span
          >📅
          <p class="inline opacity-60">
            Joined {{ authorStore.author.joinedAt }}
          </p></span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthorStore } from "@/stores/getAuthor";

const authorStore = useAuthorStore();

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
