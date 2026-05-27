<template>
  <Post
    v-for="post in posts.data"
    :date="post.createdAt"
    :title="post.title"
    :content="post.body"
    :id="post.id"
  />
</template>

<script setup>
import Post from "@/components/PostComponents/Post.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8001/api/posts", {
      headers: {
        Authorization:
          "Bearer 1|RnPHPuErN80KDD8lzCrjGZsCsyd1u416tezFEpUW860186d4",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts", error);
  }
});
</script>
