import api from "@/api/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthorStore = defineStore("author", () => {
  const author = ref(null);
  const recentPosts = ref(null);
  const loading = ref(true);

  const fetchAuthor = async (authorName) => {
    loading.value = true;
    try {
      const response = await api.get(`/author/${authorName}`);
      author.value = response.data.data;
      recentPosts.value = response.data.data.recentPosts;
    } catch (error) {
      console.error("Error fetching the author", error);
    } finally {
      loading.value = false;
    }
  };

  return { author, loading, fetchAuthor, recentPosts };
});
