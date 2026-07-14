<template>
  <div class="my-4">
    <Input placeholder="Search posts..." />

    <div class="font-medium flex gap-2">
      <div
        class="mt-4 mb-2 border text-neutral-500 border-neutral-700 px-3 py-1 rounded-2xl text text-xs hover:text-white hover:bg-neutral-800 hover:border-neutral-400 hover:cursor-pointer"
        v-for="tag in tags"
        :key="tag.name"
        :class="
          tag.active ? ['bg-neutral-800 border-neutral-400! text-white!'] : ''
        "
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
    active: true,
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
