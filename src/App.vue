<script setup>
import Header from "@/components/GlobalComponents/Header.vue";
import Footer from "@/components/GlobalComponents/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header v-show="!$route.meta.hideHeader" />
  <RouterView />
  <Footer />
</template>
