<template>
  <div>
    <div class="mt-7">
      <BackButton message="Account" @click="router.back()" />
    </div>

    <div class="flex flex-col w-full">
      <Form @submit="updatePassword(form)" title="Change Password">
        <Input
          title="Current Password"
          v-model="form.current_password"
          name="current_password"
          type="password"
          required
        />
        <ErrorContainer
          v-if="errors.current_password"
          :title="errors.current_password"
        />
        <Input
          title="New Password"
          v-model="form.password"
          type="password"
          name="password"
          required
        />
        <Input
          title="Repeat New Password"
          v-model="form.password_confirmation"
          type="password"
          name="password_confirmation"
          required
        />
        <ErrorContainer
          v-if="errors.password"
          :title="errors.current_password"
        />
        <Button design="secondary" title="Change Password" />
      </Form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BackButton from "@/components/GlobalComponents/BackButton.vue";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import api from "@/api/axios";
import { reactive } from "vue";
import { useAuthStore } from "@/stores/authStore";
import ErrorContainer from "@/components/GlobalComponents/ErrorContainer.vue";

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  current_password: "",
  password: "",
  password_confirmation: "",
});

const errors = reactive({
  current_password: "",
  password: "",
});

const updatePassword = async (form) => {
  try {
    await api.put("/user/password", form);
    authStore.logout();
  } catch (e) {
    if (e.response && e.response.status === 422) {
      errors.current_password = e.response.data.errors.current_password[0];
      errors.password = e.response.data.errors.password[0];
    }
    console.error("Error changing password", e);
  }
};
</script>
