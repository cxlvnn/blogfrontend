<script setup>
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";
import Textarea from "@/components/GlobalComponents/Textarea.vue";
</script>

<template>
  <Form
    action="http://localhost:8001/api/posts"
    method="POST"
    title="Create a Post"
  >
    <div class="my-4">
      <Input title="Title" name="title" type="text" />
    </div>
    <div>
      <Textarea title="Content" name="content" />
    </div>
    <div class="flex justify-end my-5 pr-1">
      <Button title="Create" design="primary" />
    </div>
  </Form>
</template>
