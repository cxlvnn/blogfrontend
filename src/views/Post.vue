<template>
  <div v-if="isLoading" class="flex flex-col mt-7 gap-5">
    <div class="py-2 w-1/8 bg-neutral-500/20"></div>
    <PostLoading />
  </div>

  <div v-else class="flex flex-col mt-7 gap-5">
    <BackButton to="/posts" message="All Posts" />
    <Post
      :id="post.id"
      :title="post.title"
      :content="post.body"
      :date="post.createdAt"
      :likeCount="post.likeCount"
      :userLiked="post.userLiked"
      v-model="author"
    />
  </div>
</template>

<script setup>
import api from "@/api/axios";
import BackButton from "@/components/GlobalComponents/BackButton.vue";
import PostLoading from "@/components/GlobalComponents/LoadingComponents/PostLoading.vue";
import Post from "@/components/PostComponents/PostView.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const splits = route.path.split("/");
const id = splits[splits.length - 1];

const isLoading = ref(true);

const post = ref({});
const author = ref(null);

onMounted(async () => {
  try {
    const response = await api.get(`/posts/${id}`);
    post.value = response.data.data;
    author.value = response.data.data.relationships?.author;
  } catch (error) {
    console.error("Error fetching the post", error);
  } finally {
    isLoading.value = false;
  }
});
</script>
