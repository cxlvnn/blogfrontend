<template>
  <div class="flex flex-col gap-3 h-180 pt-40 border-b border-b-white/20 text-white">
    <div class="font-mono text-neutral-400 text-sm">
      <h1>404</h1>
    </div>

    <div class="text-neutral-200 pb-4 text-5xl font-bold">
      <h1>Page not found.</h1>
    </div>

    <div class="text-neutral-400 pb-4">
      <p>The page you are looking for does not exist or has been moved</p>
    </div>

    <div>
      <BackButton to="/" message="Back to home" />
    </div>
  </div>
</template>

<script setup>
import BackButton from "@/components/GlobalComponents/BackButton.vue";
</script>
