<template>
  <div v-if="isLoading">
    <ProfileLoading />
  </div>

  <div v-else>
    <ProfileAbout v-model="user" />
    <ProfileInfo :user />
    <ProfileLinks :user />
  </div>
</template>

<script setup>
import api from "@/api/axios";
import ProfileLoading from "@/components/GlobalComponents/LoadingComponents/ProfileLoading.vue";
import ProfileAbout from "@/components/ProfileComponents/ProfileAbout.vue";
import ProfileInfo from "@/components/ProfileComponents/ProfileInfo.vue";
import ProfileLinks from "@/components/ProfileComponents/ProfileLinks.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const user = ref({});

const isLoading = ref(true);

const route = useRoute();
const splits = route.path.split("/");
const type = splits[splits.length - 1];

const fetchUser = async () => {
  try {
    const response = await api.get(`/${type}`);
    user.value = response.data.data;
  } catch (error) {
    console.error("Error fetching user", error);
  } finally {
    isLoading.value = false;
  }
};
fetchUser();
</script>
