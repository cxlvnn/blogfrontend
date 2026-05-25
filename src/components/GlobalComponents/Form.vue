<template>
  <div class="flex flex-col my-10 text-white border border-white/20 p-10">
    <h2 class="text-center text-white/80 text-2xl font-bold my-5">{{title}}</h2>
    <form :action :method>
      <div class="my-4">
        <Input title="Title" name="title" type="text" />
      </div>
      <div>
        <Textarea title="Content" name="content"/>
      </div>
      <div class="flex justify-end my-5 pr-1">
        <Button title="Create" design="primary" />
      </div>
    </form>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import Input from "./Input.vue";
import Textarea from "./Textarea.vue";
const props = defineProps({
  action: String,
  method: String,
  title: String,
});
</script>
