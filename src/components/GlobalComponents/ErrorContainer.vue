<template>
  <div class="text-red-500 text-sm">
    <p>
      {{ title }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>
