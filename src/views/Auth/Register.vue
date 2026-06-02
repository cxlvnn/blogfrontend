<template>
  <CleanerHeader />

  <Form @submit="register" title="Join us to share your ideas">
    <Input
      title="Name"
      v-model="form.name"
      type="text"
      placeholder="John Doe"
      :required="true"
    />

    <Input
      title="Email"
      v-model="form.email"
      type="email"
      placeholder="johndoe@example.com"
      :required="true"
    />
    <p v-if="errors.email?.length" class="text-sm text-red-400 -mt-3">
      {{ errors.email[0] }}
    </p>

    <Input
      title="Password"
      v-model="form.password"
      type="password"
      placeholder="Choose a strong password"
      :required="true"
    />
    <ul class="text-xs text-neutral-500 list-disc ml-5 space-y-1 -mt-2">
      <li :class="ruleClass(errors.password, 'characters')">
        At least 8 characters
      </li>
      <li :class="ruleClass(errors.password, 'uppercase')">
        One uppercase letter
      </li>
      <li :class="ruleClass(errors.password, 'number')">One number</li>
    </ul>

    <Button design="secondary" title="Sign Up" />

    <div class="text-center text-sm text-neutral-400">
      Already have an account?
      <RouterLink
        to="/login"
        class="text-white hover:text-blue-400 transition-colors underline underline-offset-2"
        >Log in</RouterLink
      >
    </div>
  </Form>
</template>

<script setup>
import api from "@/api/axios";
import Button from "@/components/GlobalComponents/Button.vue";
import CleanerHeader from "@/components/GlobalComponents/CleanerHeader.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import { onMounted, onUpdated, reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const errors = reactive({
  email: [],
  password: [],
});

const router = useRouter();
const authStore = useAuthStore();

const ruleClass = (list, keyword) => ({
  "text-red-400 font-medium": list?.some((e) =>
    e.toLowerCase().includes(keyword.toLowerCase()),
  ),
});

const register = async () => {
  errors.email = [];
  errors.password = [];
  try {
    const response = await api.post("/register", form);
    if (response.data.user) {
      authStore.setLoggedIn(true);
      router.push("/posts");
    }
  } catch (error) {
    if (error.response?.status === 422 && error.response.data?.errors) {
      errors.email = error.response.data.errors.email || [];
      errors.password = error.response.data.errors.password || [];
    }
    getCookie();
  }
};

const getCookie = async () => {
  try {
    await api.get("/sanctum/csrf-cookie", {
      baseURL: "http://localhost:8001",
    });
  } catch (error) {
    console.error("Error getting the CSRF token", error);
  }
};

onMounted(async () => {
  getCookie();
});
</script>
