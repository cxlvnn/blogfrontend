<template>
  <div>
    <div class="mt-7">
      <BackButton message="Account" @click="router.back()" />
    </div>

    <div class="flex flex-col w-full">
      <Form title="Change Password">
        <Input title="Current Password" />
        <Input title="New Password" />
        <Input title="Repeat New Password" />
        <Button design="secondary" title="Change Password" />
      </Form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BackButton from "@/components/GlobalComponents/BackButton.vue";
import Button from "@/components/GlobalComponents/Button.vue";
import Form from "@/components/GlobalComponents/Form.vue";
import Input from "@/components/GlobalComponents/Input.vue";

const router = useRouter();
</script>
