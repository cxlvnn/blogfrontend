<template>
  <Form @submit.prevent="register" title="Join us to share your ideas">
    <div class="my-4">
      <Input
        title="Name"
        v-model="form.name"
        type="text"
        placeholder="John Doe"
        :required="true"
      />
    </div>

    <div :class="[errors.email?.length ? 'my-1' : 'my-4']">
      <Input
        title="Email"
        v-model="form.email"
        type="email"
        placeholder="johndoe@example.com"
        :required="true"
      />
    </div>
    <div v-if="errors.email?.length">
      <p class="text-sm text-red-500">{{ errors.email[0] }}</p>
    </div>

    <div class="mt-4">
      <Input
        title="Password"
        v-model="form.password"
        type="password"
        placeholder="Choose a strong password"
        :required="true"
      />
    </div>
    <div class="flex mb-5 ml-4 text-sm text-neutral-500">
      <ul class="list-disc">
        <li
          :class="{
            'text-red-500 font-bold': errors.password?.some((e) =>
              e.includes('characters'),
            ),
          }"
        >
          Must be at least 8 characters long
        </li>
        <li
          :class="{
            'text-red-500 font-bold': errors.password?.some((e) =>
              e.includes('uppercase'),
            ),
          }"
        >
          Must contain at least one uppercase letter
        </li>
        <li
          :class="{
            'text-red-500 font-bold': errors.password?.some((e) =>
              e.includes('number'),
            ),
          }"
        >
          Must contain at least one number
        </li>
      </ul>
    </div>

    <div class="my-2">
      <Button design="secondary" title="Sign Up" />
    </div>
  </Form>
</template>

<script setup>
import api from "@/api/axios";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const errors = reactive({
  email: [],
  password: [],
});

const router = useRoute();

const register = async () => {
  try {
    const response = await api.post("/register", form);
    if (response.data.user) {
      router.push("/");
    }
  } catch (error) {
    if (error.response.status === 422) {
      errors.email = error.response.data.errors.email;
      errors.password = error.response.data.errors.password;
    }
  }
};

onMounted(async () => {
  try {
    await api.get("/sanctum/csrf-cookie", {
      baseURL: "http://localhost:8001",
    });
  } catch (error) {
    console.error("Error getting the CSRF token", error);
  }
});
</script>
