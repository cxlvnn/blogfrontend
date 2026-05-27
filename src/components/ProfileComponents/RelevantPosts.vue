<template>
  <div class="flex flex-col my-8 text-white">
    <div class="text-sm my-2 font-bold text-neutral-500 pb-2">
      <p>RECENT WRITING</p>
    </div>
    <div class="flex flex-col">
      <div
        v-for="post in posts"
        class="border-b border-b-white/20 last:border-b-0 py-5"
      >
        <p class="text-xs/tight tracking-widest opacity-60">{{ post.date }}</p>
        <p class="py-2 font-bold">{{ post.title }}</p>
        <p class="text-sm opacity-60">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    title: "Designing for Scalability from Day One",
    content:
      "Starting with a minimal foundation doesn't mean sacrificing future growth.",
    date: "2026 - 05 - 19",
  },
  {
    title: "The Case for Static",
    content:
      "Why static site generation remains the optimal choice for content-focused websites.",
    date: "2026 - 05 - 10",
  },
  {
    title: "Typography as Interface",
    content: "When you strip away everything else, type is what remains.",
    date: "2026 - 01 - 09",
  },
];
</script>
