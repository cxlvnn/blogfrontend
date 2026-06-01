<template>
  <div v-if="userStore.loading">
    <ProfileLoading />
  </div>

  <div v-else-if="userStore.user">
    <MeAboutSection />
    <MeInfoSection />
    <MeSettingsLinks />
  </div>

  <div v-else class="py-20 text-center text-neutral-400">
    <p>Failed to load profile. Please try again later.</p>
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
