<script setup>
import { ref } from "vue";
</script>

<template>
  <nav>
    <div class="logo">
      <h2><a href="/"> Blog </a></h2>
    </div>
    <div class="pages">
      <a href="/posts/create">Write</a>
      <a href="/profile">Profile</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 70%;
  margin: auto;
  padding: 20px;
}

.logo {
  margin-bottom: 15px;
}

.pages {
  margin: 4px;
}

.pages a {
  color: #888;
  padding-right: 20px;
}
</style>
