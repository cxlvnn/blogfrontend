import api from "@/api/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const loading = ref(true);

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

  async function deleteUser(form) {
    try {
      await api.delete("/user", { data: form });
      user.value = null;
    } catch (error) {
      console.error("Error deleting the user", error);
      throw error;
    }
  }

  return { user, loading, fetchUser, deleteUser };
});
