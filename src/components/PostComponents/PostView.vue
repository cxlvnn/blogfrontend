<template>
  <div class="flex flex-col text-white border-b border-b-white/20">
    <div class="text-3xl font-bold">
      <h1>
        {{ title }}
      </h1>

      <div class="flex flex-row gap-2 items-center my-2">
        <div
          class="w-8 h-8 border border-neutral-800 rounded-full bg-gray-400/10 flex items-center justify-center text-sm font-medium text-white/60"
        >
          {{ getNameLetters(author?.name) }}
        </div>
        <div class="text-sm font-normal text-neutral-200">
          <p><RouterLink class="hover:text-neutral-300 transition-colors" to="/profile">{{ author?.name }}</RouterLink></p>
        </div>
        <span class="text-xs text-neutral-600">·</span>
        <div class="text-sm tracking-wide font-normal text-white/50">
          <p>{{ date }}</p>
        </div>
      </div>
    </div>

    <div class="flex py-7 text-white">
      <p v-html="content"></p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const author = defineModel();

const post = defineProps({
  date: String,
  title: String,
  content: String,
});

const getNameLetters = (author) => {
  if (!author || typeof author !== "string") {
    return "";
  }
  let letters = author[0];
  const splits = author.split(" ");
  if (splits.length > 1) {
    letters += splits[1][0];
  }
  return letters;
};
</script>
