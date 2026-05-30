import api from "@/api/axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const loading = ref(true);

  const isLoggedIn = computed(() => user.value !== null);

  async function fetchUser() {
    loading.value = true;
    try {
      const response = await api.get("/me");
      user.value = response.data.data;
    } catch (error) {
      console.error("Error fetching the user", error);
    } finally {
      loading.value = false;
    }
  }

  return { user, loading, isLoggedIn, fetchUser };
});
