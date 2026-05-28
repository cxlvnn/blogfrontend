<template>
  <button
    type="submit"
    class="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition duration-200 cursor-pointer"
    :class="[
      design === 'primary'
        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
        : '',
      design === 'secondary'
        ? 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
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
