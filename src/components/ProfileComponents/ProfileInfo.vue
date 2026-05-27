<template>
  <ProfileStatContainer
    :postCount="routeProfile() ? 42 : ''"
    readCount="100"
    :joined="routeProfile() ? 8 : ''"
    :streak="routeMe() ? 8 : ''"
    :savedCount="routeMe() ? 24 : ''"
  />
  <RelevantPosts v-show="routeProfile()" />
  <ReadingHistory v-show="routeMe()" />
  <Bookmarks v-show="routeMe()" />
</template>

<script setup>
import { useRoute } from "vue-router";
import ProfileStatContainer from "./ProfileStatContainer.vue";
import RelevantPosts from "./RelevantPosts.vue";
import ReadingHistory from "./ReadingHistory.vue";
import Bookmarks from "./Bookmarks.vue";

const routeProfile = () => {
  const route = useRoute();
  return route.path === "/profile";
};

const routeMe = () => {
  const route = useRoute();
  return route.path === "/me";
};
</script>
