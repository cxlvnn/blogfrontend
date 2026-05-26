<template>
  <!-- base container -->
  <div class="flex gap-5 border-b border-b-white/20 py-7 px-2 text-white">
    <div class="logo">
      <div class="p-6 bg-gray-400/10 rounded-full font-bold text-3xl">JD</div>
    </div>

    <!-- profile author info -->
    <div>
      <!-- name -->
      <div class="text-xl text-amber-50 font-bold">
        <h2>John Doe</h2>
      </div>

      <!-- username -->
      <div v-if="routeProfile()" class="text-white/40 text-sm my-1 font-mono mb-2">
        <p>@johndoe</p>
      </div>

      <!-- email -->
      <div v-if="routeMe()" class="text-white/60 text-sm my-1 font-mono mb-2">
        <p>johndoe@gmail.com</p>
      </div>

      <!-- bio -->
      <div v-if="routeProfile()" class="mb-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          veritatis adipisci ad blanditiis dolores quod rerum enim ratione
          soluta nobis.
        </p>
      </div>

      <!-- additional info -->
      <div v-if="routeProfile()" class="flex flex-row gap-3 text-sm [&_span]:opacity-100">
        <span
          >📍
          <p class="inline opacity-60">San Francisco</p></span
        >
        <span
          >🔗
          <p class="inline opacity-60">johndoe.com</p></span
        >
        <span
          >📅
          <p class="inline opacity-60">Joined 2024</p></span
        >
      </div>

      <!-- specific additional info for user -->
      <div v-if="routeMe()" class="flex gap-2 items-center text-sm opacity-60">
        <p class="text-xs">Joined 2024</p>
        <p class="bg-gray-100/10 py-1 px-2 border border-gray-100/10 font-bold rounded">MEMBER</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const routeProfile = () => {
  const route = useRoute();
  return route.path === '/profile';
};

console.log(routeProfile())

const routeMe = () => {
  const route = useRoute();
  return route.path === '/me';
};


const props = defineProps({
  profileType: String,
});
</script>
