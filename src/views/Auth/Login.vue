<template>
  <Form :action="loginEndpoint" method="POST" title="Welcome back">
    <div class="my-4">
      <Input
        title="Email"
        name="email"
        type="email"
        placeholder="johndoe@example.com"
      />
    </div>
    <div class="my-4">
      <Input
        title="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <div class="my-2">
      <Button design="secondary" title="Sign In" />
    </div>
  </Form>
</template>

<script setup>
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";

const loginEndpoint = "http://localhost:8001/api/login";
</script>
