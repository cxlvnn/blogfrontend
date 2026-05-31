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
    router.push("/posts");
  } catch (error) {
    console.error("Error creating the post", error);
  }
};
</script>

<template>
  <Form @submit="createPost" title="Create a Post">
    <Input
      title="Title"
      v-model="form.title"
      type="text"
      placeholder="A catchy title..."
    />
    <Textarea
      title="Content"
      v-model="form.body"
      placeholder="Write your thoughts here..."
    />
    <div class="flex justify-end">
      <Button title="Publish" design="primary" />
    </div>
  </Form>
</template>
