<template>
  <Form
    :action="registerEndpoint"
    method="POST"
    title="Join us to share your ideas"
  >
    <div class="my-4">
      <Input
        title="Name"
        name="name"
        type="text"
        placeholder="John Doe"
      />
    </div>

    <div class="my-4">
      <Input
        title="Email"
        name="email"
        type="email"
        placeholder="johndoe@example.com"
      />
    </div>
    <div class="mt-4">
      <Input
        title="Password"
        name="password"
        type="password"
        placeholder="Choose a strong password"
      />
    </div>
    <div class="flex mb-5 ml-4 text-sm text-neutral-500">
      <ul class="list-disc">
        <li>Must be at least 8 characters long</li>
        <li>Must contain at least one uppercase letter</li>
        <li>Must contain at least one number</li>
      </ul>
    </div>
    <div class="my-2">
      <Button design="secondary" title="Sign Up" />
    </div>
  </Form>
</template>

<script setup>
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";

const registerEndpoint = "http://localhost:8001/api/register";
</script>
