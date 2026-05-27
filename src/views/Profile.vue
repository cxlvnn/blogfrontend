<template>
  <ProfileAbout v-model="user" />
  <ProfileInfo :user />
  <ProfileLinks :user />
</template>

<script setup>
import ProfileAbout from "@/components/ProfileComponents/ProfileAbout.vue";
import ProfileInfo from "@/components/ProfileComponents/ProfileInfo.vue";
import ProfileLinks from "@/components/ProfileComponents/ProfileLinks.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const user = ref({});

const route = useRoute();
const splits = route.path.split('/');
const type = splits[splits.length - 1];

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8001/api/${type}`, {
      headers: {
        Authorization:
          "Bearer 1|RnPHPuErN80KDD8lzCrjGZsCsyd1u416tezFEpUW860186d4",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    user.value = response.data.data;
  } catch (error) {}
});
</script>
