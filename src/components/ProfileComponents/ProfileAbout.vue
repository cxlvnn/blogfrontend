<template>
  <!-- base container -->
  <div class="flex gap-5 border-b border-b-white/20 py-7 px-2 text-white">
    <div
      class="w-20 h-20 border border-neutral-800 rounded-full bg-gray-400/10 flex items-center justify-center font-medium text-white/60 text-3xl"
    >
      {{ getNameLetters(user?.name) }}
    </div>

    <!-- profile author info -->
    <div>
      <!-- name -->
      <div class="text-xl text-amber-50 font-bold">
        <h2>{{ user.name }}</h2>
      </div>

      <!-- email -->
      <div class="text-white/60 text-sm my-1 font-mono mb-2">
        <p>{{ user.email }}</p>
      </div>

      <!-- bio -->
      <div v-if="routeProfile()" class="mb-5">
        <p v-show="user.bio">
          {{ user.bio }}
        </p>
        <p v-show="!user.bio" class="text-neutral-600">No bio yet</p>
      </div>

      <!-- additional info -->
      <div
        v-if="routeProfile()"
        class="flex flex-row gap-3 text-sm [&_span]:opacity-100"
      >
        <span
          >📍
          <p class="inline opacity-60">
            {{ user.address }}
          </p></span
        >
        <span
          >🔗
          <p class="inline opacity-60">
            {{ user.website ? user.website : "Not set" }}
          </p></span
        >
        <span
          >📅
          <p class="inline opacity-60">Joined {{ user.joinedAt }}</p></span
        >
      </div>

      <!-- specific additional info for user -->
      <div v-if="routeMe()" class="flex gap-2 items-center text-sm opacity-60">
        <p class="text-xs">Joined 2024</p>
        <p
          class="bg-gray-100/10 py-0.5 px-2 border border-gray-100/20 font-medium rounded"
        >
        {{user.type}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const routeProfile = () => {
  const route = useRoute();
  return route.path === "/profile";
};

const routeMe = () => {
  const route = useRoute();
  return route.path === "/me";
};

const user = defineModel();

const getNameLetters = (name) => {
  if (!name || typeof name !== "string") {
    return "";
  }
  let letters = name[0];
  const splits = name.split(" ");
  if (splits.length > 1) {
    letters += splits[1][0];
  }
  return letters;
};
</script>
