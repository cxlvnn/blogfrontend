<template>
  <div class="flex flex-col mt-7 gap-5">
    <BackButton to="/" message="All Posts" />
    <Post :title="post.title" :content="post.body" :date="post.createdAt" />
  </div>
</template>

<script setup>
import BackButton from "@/components/GlobalComponents/BackButton.vue";
import Post from "@/components/PostComponents/PostView.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const splits = route.path.split("/");
const id = splits[splits.length - 1];

const post = ref({});

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8001/api/posts/${id}`, {
      headers: {
        Authorization:
          "Bearer 1|RnPHPuErN80KDD8lzCrjGZsCsyd1u416tezFEpUW860186d4",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    post.value = response.data.data;
  } catch (error) {
    console.error("Error fetching the post", error);
  }
});
</script>
