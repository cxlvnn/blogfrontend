<template>
  <Form @submit.prevent="login(form)" method="POST" title="Welcome back">
    <div class="my-4">
      <Input
        title="Email"
        v-model="form.email"
        type="email"
        placeholder="johndoe@example.com"
        :required="true"
      />
    </div>
    <div :class="error.message ? 'my-2' : 'my-4'">
      <Input
        title="Password"
        v-model="form.password"
        type="password"
        :required="true"
        placeholder="Enter your password"
      />
    </div>
    <div v-show="error.message" class="text-white">
      <p class="text-red-500 text-sm">{{ error.message }}</p>
    </div>
    <div class="my-2">
      <Button design="secondary" title="Sign In" />
    </div>
  </Form>
</template>

<script setup>
import api from "@/api/axios";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

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
    if (e.response.status === 422) {
      error.message = e.response.data.message;
    }
  }
};
</script>
