<script setup>
import { ref } from "vue";
const name = ref("John");
const message = ref("Learning vue for the somethingth time")
</script>

<template>
  <main>
    <h1>Hello, {{ name }}</h1>
    <p>{{ message }}</p>
  </main>
</template>

<style scoped>
main h1 {
  display: block;
}

main a {
  color: #42b883;
}
</style>
