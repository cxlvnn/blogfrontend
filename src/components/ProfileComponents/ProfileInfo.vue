<template>
  <ProfileStatContainer
    :postCount="routeProfile() ? user.postCount : ''"
    :readCount="user.readCount"
    :joined="routeProfile() ? 8 : null"
    :streak="routeMe() ? 8 : null"
    :savedCount="routeMe() ? 24 : null"
    :user
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

const props = defineProps({
  user: Object,
});
</script>
