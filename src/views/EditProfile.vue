<template>
  <div v-if="userStore.loading" class="py-20">
    <ProfileLoading />
  </div>

  <div v-else-if="userStore.user">
    <div class="mt-7">
      <BackButton message="Account" @click="router.back()" />
    </div>

    <div class="flex flex-col w-full">
      <Form title="Edit Profile">
        <Input title="Name" v-model="form.name" />
        <Input title="Email" v-model="form.email" />
        <Textarea title="Bio" v-model="form.bio" />
        <Button design="secondary" title="Save Changes" />
      </Form>
    </div>
  </div>

  <div v-else class="py-20 text-center text-neutral-400">
    <p>Failed to load profile. Please try again later.</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import BackButton from "@/components/GlobalComponents/BackButton.vue";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import Textarea from "@/components/GlobalComponents/Textarea.vue";
import ProfileLoading from "@/components/GlobalComponents/LoadingComponents/ProfileLoading.vue";
import { useUserStore } from "@/stores/getUser";

const router = useRouter();
const userStore = useUserStore();

const form = ref({
  name: "",
  email: "",
  bio: "",
});

onMounted(() => {
  if (!userStore.user) {
    userStore.fetchUser().then(() => {
      if (userStore.user) {
        form.value.name = userStore.user.name || "";
        form.value.email = userStore.user.email || "";
        form.value.bio = userStore.user.bio || "";
      }
    });
  } else {
    form.value.name = userStore.user.name || "";
    form.value.email = userStore.user.email || "";
    form.value.bio = userStore.user.bio || "";
  }
});
</script>
