<template>
  <div v-if="userStore.loading">
    <ProfileLoading />
  </div>

  <div v-else>
    <MeAboutSection />
    <MeInfoSection />
    <MeSettingsLinks />
  </div>
</template>

<script setup>
import ProfileLoading from "@/components/GlobalComponents/LoadingComponents/ProfileLoading.vue";
import MeAboutSection from "@/components/ProfileComponents/MeAboutSection.vue";
import MeInfoSection from "@/components/ProfileComponents/MeInfoSection.vue";
import MeSettingsLinks from "@/components/ProfileComponents/MeSettingsLinks.vue";
import { useUserStore } from "@/stores/getUser";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  if (!userStore.user) {
    userStore.fetchUser();
  }
});
</script>
