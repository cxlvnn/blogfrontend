import api from "@/api/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
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

  const logout = async () => {
    await api.get("/sanctum/csrf-cookie", {
      baseURL: "http://localhost:8001",
    });
    try {
      await api.delete("/logout");
      setLoggedIn(false);
      router.push("/login");
    } catch (error) {
      console.error("Error logging out the user", error);
    }
  };

  return { checkIfLoggedIn, isLoggedIn, setLoggedIn, logout };
});
