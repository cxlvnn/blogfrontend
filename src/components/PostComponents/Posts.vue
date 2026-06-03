<script setup>
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Post from "@/components/PostComponents/Post.vue";
import Paginator from "@/components/GlobalComponents/Paginator.vue";
import PostsLoading from "@/components/GlobalComponents/LoadingComponents/PostsLoading.vue";
import { usePostStore } from "@/stores/PostStore";

const postStore = usePostStore();
const route = useRoute();
const router = useRouter();

function getPageFromRoute() {
  const page = parseInt(route.query.page, 10);
  return Number.isNaN(page) || page < 1 ? 1 : page;
}

function loadPage(page) {
  router.replace({ query: { ...route.query, page } });
  postStore.fetchPosts(page);
}

onMounted(() => {
  postStore.fetchPosts(getPageFromRoute());
});

watch(
  () => route.query.page,
  (newPage) => {
    const page = parseInt(newPage, 10);
    if (!Number.isNaN(page) && page !== postStore.currentPage) {
      postStore.fetchPosts(page);
    }
  },
);
</script>

<template>
  <div v-if="postStore.loading">
    <PostsLoading />
  </div>

  <template v-else>
    <Post
      v-for="post in postStore.posts.data"
      :key="post.id"
      :id="post.id"
      :date="post.createdAt"
      :title="post.title"
      :content="post.body"
    />
  </template>

  <Paginator
    v-if="postStore.posts.meta?.last_page > 1"
    :links="postStore.posts.meta.links"
    @change="loadPage"
  />
</template>
