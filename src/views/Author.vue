<template>
  <div v-if="authorStore.loading">
    <ProfileLoading />
  </div>

  <div v-else>
    <AboutSection />
    <InfoSection />
    <LinksSection />
  </div>
</template>

<script setup>
import AboutSection from "@/components/AuthorProfileComponents/AboutSection.vue";
import InfoSection from "@/components/AuthorProfileComponents/InfoSection.vue";
import LinksSection from "@/components/AuthorProfileComponents/LinksSection.vue";
import ProfileLoading from "@/components/GlobalComponents/LoadingComponents/ProfileLoading.vue";

import { useAuthorStore } from "@/stores/getAuthor";
import { onMounted } from "vue";

const props = defineProps({
  authorName: {
    type: String,
    required: true,
  },
});

const authorStore = useAuthorStore();

onMounted(() => {
  if (!authorStore.author) {
    authorStore.fetchAuthor(props.authorName);
  }
});
</script>
