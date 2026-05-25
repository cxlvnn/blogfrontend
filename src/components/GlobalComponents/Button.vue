<template>
  <button
    type="submit"
    class="hover:cursor-pointer"
    :class="[
      design === 'primary'
        ? 'border-none rounded bg-green-800 hover:bg-green-900 py-2 px-5'
        : '',
      design === 'secondary'
        ? 'border-none rounded bg-blue-800 hover:bg-blue-900 py-2 px-5'
        : '',
    ]"
  >
    {{ title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: String,
  design: {
    type: String,
    default: "primary",
  },
});
</script>
