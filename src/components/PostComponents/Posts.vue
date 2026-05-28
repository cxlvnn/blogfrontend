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
import api from "@/api/axios";
import Post from "@/components/PostComponents/Post.vue";
import { onMounted, ref } from "vue";

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await api.get("/posts", {
    });
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts", error);
  }
});
</script>
