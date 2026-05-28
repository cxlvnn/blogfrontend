<template>
  <Form @submit="login(form)" method="POST" title="Welcome back">
    <Input
      title="Email"
      v-model="form.email"
      type="email"
      placeholder="johndoe@example.com"
      :required="true"
    />

    <Input
      title="Password"
      v-model="form.password"
      type="password"
      :required="true"
      placeholder="Enter your password"
    />

    <p v-show="error.message" class="text-sm text-red-400">{{ error.message }}</p>

    <Button design="secondary" title="Sign In" />

    <div class="text-center text-sm text-neutral-400">
      Don't have an account?
      <RouterLink to="/register" class="text-white hover:text-blue-400 transition-colors underline underline-offset-2">Register</RouterLink>
    </div>
  </Form>
</template>

<script setup>
import api from "@/api/axios";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import { onMounted, reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";

const form = reactive({
  email: "",
  password: "",
});

const error = reactive({
  message: "",
});

const router = useRouter();

onMounted(async () => {
  try {
    await api.get("/sanctum/csrf-cookie", {
      baseURL: "http://localhost:8001",
    });
  } catch (error) {
    console.error("Error getting the CSRF token", error);
  }
});

const login = async () => {
  try {
    const response = await api.post("/login", form);
    if (response.data.user) {
      router.push("/");
    }
  } catch (e) {
    if (e.response && e.response.status === 422) {
      error.message = e.response.data.message;
    }
  }
};
</script>
