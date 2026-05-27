<template>
  <div class="flex flex-col my-10 text-white border border-white/20 p-10">
    <h2 class="text-center text-neutral-100 text-2xl font-bold my-5">{{title}}</h2>
    <form :action :method>
      <slot></slot>
    </form>
  </div>
</template>

<script setup>
const props = defineProps({
  action: String,
  method: String,
  title: String,
});
</script>
