<template>
  <ProfileAbout v-model="user" />
  <ProfileInfo :user />
  <ProfileLinks :user />
</template>

<script setup>
import api from "@/api/axios";
import ProfileAbout from "@/components/ProfileComponents/ProfileAbout.vue";
import ProfileInfo from "@/components/ProfileComponents/ProfileInfo.vue";
import ProfileLinks from "@/components/ProfileComponents/ProfileLinks.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const user = ref({});

const route = useRoute();
const splits = route.path.split("/");
const type = splits[splits.length - 1];

const fetchUser = async () => {
  try {
    const response = await api.get(`/${type}`);
    user.value = response.data.data;
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

fetchUser();
</script>
