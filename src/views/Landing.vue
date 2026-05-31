<template>
  <CleanerHeader :showLink="true" />

  <main class="flex flex-col mb-20 gap-5">
    <div class="text-7xl font-bold text-white">
      <h1>Quiet space</h1>
      <h1>for clear thinking.</h1>
    </div>

    <div class="text-neutral-400 font-medium text-wider mb-5">
      <p>Write and read without noise. No ads, no tracking,</p>
      <p>no clutter.</p>
    </div>

    <div class="flex gap-3">
      <Button
        @click="route.push('/register')"
        class="py-4 font-bold px-8"
        title="Get started"
      />
      <Button
        @click="route.push('/login')"
        class="font-bold px-8"
        design="secondary"
        title="Sign in"
      />
    </div>
  </main>

  <footer class="text-white/40 my-10 text-sm">
    <p>&copy 2026</p>
  </footer>
</template>

<script setup>
import Button from "@/components/GlobalComponents/Button.vue";
import CleanerHeader from "@/components/GlobalComponents/CleanerHeader.vue";

import { useRouter } from "vue-router";

const route = useRouter();
</script>
