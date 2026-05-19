<script setup>
import { ref } from "vue";
</script>

<template>
  <nav class="bg-white shadow-md fixed w-full z-50 top-0 left-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 font-bold text-xl text-gray-800">
          <a href="/">Blog</a>
        </div>

        <div class="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="/posts" class="hover:text-blue-600 transition-colors">Posts</a>
          <a href="/user" class="hover:text-blue-600 transition-colors">Profile</a>
        </div>

        <div class="hidden md:block">
          <a
            href="#"
            class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >Register</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
