<script setup>
import { ref, onMounted } from "vue";

// Reactive state for API data
const posts = ref([]);
const isLoading = ref(true);

// Fetch function
async function fetchPosts() {
  try {
    const response = await fetch("http://192.168.100.46:8000/api/posts", {
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
      <p v-if="isLoading">Loading</p>

      <div v-else class="blog-area" v-for="post in posts">
        <div class="blog-title">
          <p>{{ post.createdAt }}</p>
          <h3>
            <a :href="`/posts/${post.id}`"> {{ post.title }} </a>
          </h3>
        </div>

        <div class="blog-content">
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 70%;
  margin: auto;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 40px 0px;
}

main h3 {
  margin: 7px 0px;
}

main p {
  color: #888;
}

.blog-area {
  padding: 10px 0;
}
</style>
