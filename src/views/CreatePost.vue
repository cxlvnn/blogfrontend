<script setup>
import api from "@/api/axios";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import Textarea from "@/components/GlobalComponents/Textarea.vue";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const tags = ref([]);

onMounted(async () => {
  try {
    const response = await api.get("/post/create");
    tags.value = response.data;
  } catch (error) {
    console.error("Unable to get tags: ", error);
  }
});

const form = reactive({
  title: "",
  body: "",
  tag: "",
});

const router = useRouter();

const createPost = async () => {
  try {
    const response = await api.post("/posts", form);
    const id = response.data.data.id;
    router.push(`/posts/${id}`);
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

    <div class="text-neutral-300 font-medium text-sm">
      <label class="block" for="tag">Choose a tag:</label>
      <select
        v-model="form.tag"
        class="border border-white/15 bg-neutral-900/40 rounded w-full p-2 my-2"
        required
      >
        <option value="" disabled selected>Tag for your post</option>
        <option v-for="tag in tags" :key="tag.value" :value="tag.value">
          {{ tag.label }}
        </option>
      </select>
    </div>
    <div class="flex justify-end">
      <Button title="Publish" design="primary" />
    </div>
  </Form>
</template>
