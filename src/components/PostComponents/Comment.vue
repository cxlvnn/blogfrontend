<template>
  <div class="flex flex-row items-center gap-2 pb-4">
    <div
      class="w-10 h-10 border border-neutral-800 rounded-full bg-gray-400/10 flex items-center justify-center font-medium text-white/60"
    >
      {{ getNameLetters(authorName) }}
    </div>

    <div>
      <div class="flex items-center gap-2">
        <h1 class="font-medium text-md">
          {{ authorName }}
        </h1>

        <p class="text-xs font-medium text-neutral-600">{{ date }}</p>
      </div>

      <div>
        <p class="text-sm text-neutral-300">
          {{ body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  authorName: String,
  date: String,
  body: String,
});

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
