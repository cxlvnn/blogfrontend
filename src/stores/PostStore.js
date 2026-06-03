import api from "@/api/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("post", () => {
  const posts = ref([]);
  const loading = ref(true);
  const currentPage = ref(1);

  async function fetchPosts(page = 1) {
    loading.value = true;
    currentPage.value = page;
    try {
      const response = await api.get(`/posts?page=${page}`);
      posts.value = response.data;
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      loading.value = false;
    }
  }

  return { posts, loading, currentPage, fetchPosts };
});
