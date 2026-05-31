import api from "@/api/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const loading = ref(false);
  let hasChecked = false;

  const checkIfLoggedIn = async () => {
    if (hasChecked) {
      return isLoggedIn.value;
    }

    loading.value = true;
    try {
      await api.get("/user");
      isLoggedIn.value = true;
    } catch (error) {
      isLoggedIn.value = false;
    } finally {
      loading.value = false;
      hasChecked = true;
    }
    return isLoggedIn.value;
  };

  const setLoggedIn = (value) => {
    isLoggedIn.value = value;
    hasChecked = true;
  };

  return { checkIfLoggedIn, isLoggedIn, setLoggedIn };
});
