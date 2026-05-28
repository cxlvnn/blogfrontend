<script setup>
import api from "@/api/axios";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import Textarea from "@/components/GlobalComponents/Textarea.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  title: "",
  body: "",
});

const router = useRouter();

const createPost = async () => {
  try {
    await api.post("/posts", form);
    router.push("/");
  } catch (error) {
    console.error("Error creating the post", error);
  }
};
</script>

<template>
  <Form @submit.prevent="createPost" title="Create a Post">
    <div class="my-4">
      <Input title="Title" v-model="form.title" type="text" />
    </div>
    <div>
      <Textarea title="Content" v-model="form.body" />
    </div>
    <div class="flex justify-end my-5 pr-1">
      <Button title="Create" design="primary" />
    </div>
  </Form>
</template>
