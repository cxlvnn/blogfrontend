<template>
  <div class="flex gap-5 border-b border-b-white/20 py-7 px-2">
    <div class="w-20 h-20 rounded-full bg-gray-400/10 shrink-0"></div>
    <div class="flex-1 space-y-3">
      <div class="h-7 w-40 bg-neutral-500/20 rounded"></div>
      <div class="h-5 w-56 bg-neutral-500/20 rounded"></div>
      <div class="h-5 w-80 bg-neutral-500/20 rounded"></div>
    </div>
  </div>

  <div class="flex flex-row justify-center gap-5 my-4">
    <div
      v-for="n in 3"
      :key="n"
      class="bg-neutral-900/90 rounded-md border border-gray-100/10 flex-1 py-5 space-y-2"
    >
      <div class="h-6 w-8 mx-auto bg-white/10 rounded"></div>
      <div class="h-3 w-12 mx-auto bg-white/10 rounded opacity-60"></div>
    </div>
  </div>

  <div class="space-y-3 my-8">
    <div class="h-4 w-32 bg-neutral-500/20 rounded"></div>
    <div
      v-for="n in 3"
      :key="n"
      class="flex items-center border-b border-b-white/20 py-5"
    >
      <div class="h-4 w-1/3 bg-neutral-500/20 rounded"></div>
    </div>
  </div>
</template>

<script setup></script>
