<template>
  <div v-if="isLoading">
    <PostsLoading />
  </div>

  <Post
    v-else
    v-for="post in posts.data"
    :key="post.id"
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
import PostsLoading from "@/components/GlobalComponents/LoadingComponents/PostsLoading.vue";

const isLoading = ref(true);
const posts = ref([]);

onMounted(async () => {
  try {
    const response = await api.get("/posts", {});
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts", error);
  } finally {
    isLoading.value = false;
  }
});
</script>
