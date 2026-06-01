<template>
  <div v-if="userStore.loading" class="py-20">
    <ProfileLoading />
  </div>

  <div v-else-if="userStore.user" class="text-white">
    <div class="mt-7">
      <BackButton message="Account" @click="router.back()" />
    </div>

    <div class="flex flex-col w-full">
      <Form @submit="handleDelete" title="Delete Account">
        <p class="text-neutral-400">
          This will permanently delete your account along with your data and
          <span class="text-red-600">cannot be undone.</span>
        </p>
        <Input
          title="Confirm your password"
          type="password"
          v-model="form.password"
          required
        />

        <div v-show="errors.password.length">
          <p class="text-red-600">{{ errors.password }}</p>
        </div>

        <div class="flex gap-2 items-start">
          <input id="confirmation" type="checkbox" required class="mt-1" />
          <label class="text-neutral-200 text-sm" for="confirmation"
            >I understand that this will permanently delete my account.</label
          >
        </div>
        <Button design="red" title="Delete Account" />
      </Form>
    </div>
  </div>

  <div v-else class="py-20 text-center text-neutral-400">
    <p>Failed to load profile. Please try again later.</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive, onMounted } from "vue";
import BackButton from "@/components/GlobalComponents/BackButton.vue";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import ProfileLoading from "@/components/GlobalComponents/LoadingComponents/ProfileLoading.vue";
import { useUserStore } from "@/stores/getUser";
import { useAuthStore } from "@/stores/authStore";

const form = reactive({
  password: "",
});

const errors = reactive({
  password: "",
});

const userStore = useUserStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (!userStore.user) {
    userStore.fetchUser();
  }
});

const handleDelete = async () => {
  errors.password = "";
  try {
    await userStore.deleteUser(form);
    authStore.setLoggedIn(false);
    router.push("/");
  } catch (e) {
    if (e.response?.status === 422) {
      errors.password = e.response.data.message;
    } else {
      errors.password = "Something went wrong. Please try again.";
    }
  }
};
</script>
