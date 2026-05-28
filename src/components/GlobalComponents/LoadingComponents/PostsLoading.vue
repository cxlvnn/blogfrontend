<template>
  <div
    v-for="n in 3"
    :key="n"
    class="flex flex-col gap-2 py-8 border-b border-b-white/20"
  >
    <div class="h-3 w-24 bg-neutral-600/20 rounded"></div>
    <div class="h-6 w-2/3 bg-neutral-600/20 rounded"></div>
    <div class="h-4 w-full bg-neutral-600/20 rounded"></div>
  </div>
</template>

<script setup></script>
