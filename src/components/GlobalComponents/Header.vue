<script setup>
import api from "@/api/axios";
import { RouterLink } from "vue-router";

const logout = async () => {
  await api.get("/sanctum/csrf-cookie", {
    baseURL: "http://localhost:8001",
  });
  try {
    await api.delete("/logout");
  } catch (error) {
    console.error("Error logging out the user", error);
  }
};
</script>

<template>
  <nav class="flex flex-col text-white py-7 border-b border-b-white/20">
    <div class="text-xl font-bold mb-5 [&_a]:transition-colors">
      <h2>
        <RouterLink class="hover:text-blue-500" to="/"> Blog </RouterLink>
      </h2>
    </div>
    <div class="flex justify-between text-sm text-neutral-400">
      <div class="[&_a]:hover:text-neutral-300 [&_a]:transition-colors">
        <RouterLink class="pr-5" to="/posts/create">Write</RouterLink>
        <RouterLink to="/me">Profile</RouterLink>
      </div>
      <div class="flex gap-4">
        <div class="[&_a]:hover:text-neutral-300 [&_a]:transition-colors">
          <RouterLink to="/register">Register</RouterLink>
        </div>
        <div class="[&_a]:hover:text-neutral-300 [&_a]:transition-colors">
          <RouterLink to="/login">Login</RouterLink>
        </div>
        <div class="[&_a]:hover:text-neutral-300 [&_a]:transition-colors">
          <a @click="logout()">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
