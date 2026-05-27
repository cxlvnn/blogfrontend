<template>
  <RelevantLinks :user v-show="routeProfile()" />
  <ProfileSettingsLinks :user v-show="routeMe()" />
</template>

<script setup>
import { useRoute } from "vue-router";
import RelevantLinks from "./RelevantLinks.vue";
import ProfileSettingsLinks from "./ProfileSettingsLinks.vue";

const routeProfile = () => {
  const route = useRoute();
  return route.path === "/profile";
};

const routeMe = () => {
  const route = useRoute();
  return route.path === "/me";
};

const props = defineProps({ user: Object });
</script>
