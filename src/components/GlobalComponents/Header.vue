<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="flex flex-col text-white py-7 border-b border-b-white/20">
    <div class="text-xl font-bold mb-5">
      <h2><RouterLink to="/"> Blog </RouterLink></h2>
    </div>
    <div class="flex gap-4 text-sm opacity-70">
      <RouterLink to="/posts/create">Write</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
</style>
