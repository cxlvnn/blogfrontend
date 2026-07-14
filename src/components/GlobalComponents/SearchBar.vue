<template>
  <div class="my-4">
    <Input placeholder="Search posts..." />

    <div class="text-neutral-400 font-medium flex gap-2">
      <div
        class="mt-4 mb-2 border border-neutral-700 px-3 py-1 rounded-2xl text text-xs hover:text-white hover:bg-neutral-700 hover:cursor-pointer"
        v-for="tag in tags"
      >
        <p>{{ tag.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/GlobalComponents/Input.vue";

const tags = [
  {
    name: "All",
  },
  {
    name: "Design",
  },
  {
    name: "Productivity",
  },
  {
    name: "Engineering",
  },
  {
    name: "Writing",
  },
];
</script>
