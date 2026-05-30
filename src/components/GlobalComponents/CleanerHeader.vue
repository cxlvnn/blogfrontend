<template>
  <nav
    class="flex flex-row justify-between mt-10 mb-30 items-center text-white"
  >
    <div class="text-xl font-bold [&_a]:transition-colors">
      <h2>
        <RouterLink class="hover:text-blue-500" to="/"> Blog </RouterLink>
      </h2>
    </div>
    <div
      v-show="showLink"
      class="text-neutral-500 hover:text-neutral-300 transition-colors text-sm"
    >
      <RouterLink to="/login">Sign in</RouterLink>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  showLink: {
    type: Boolean,
    default: false,
  },
});
</script>
