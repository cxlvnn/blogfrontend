<script setup>
import { ref, onMounted } from "vue";

// Reactive state for API data
const posts = ref([]);
const isLoading = ref(true);

// Fetch function
async function fetchPosts() {
  try {
    const response = await fetch("http://localhost:8000/api/posts", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer 1|jRaBZRYJsAlKIH6MGezWqrumMSy7fOEPl78yAP165a7f0f4b",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await response.json();
    posts.value = result.data;
  } catch (error) {
    console.error("Fetch failed:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchPosts);
</script>

<template>
  <main>
    <div class="container">
      <h2>Posts</h2>
      <p v-if="isLoading">Loading</p>
      <div v-else class="blog-area">
        <div class="blog-title">
          <h3 v-for="post in posts">
            <a :href="`/posts/${post.id}`"> {{ post.title }} </a>
          </h3>
        </div>
        <div class="blog-content">
          <p></p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
