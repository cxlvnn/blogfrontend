<script setup>
import Form from "@/components/GlobalComponents/Form.vue";
</script>

<template>
  <Form action="http://localhost:8001/api/posts" method="GET" title="Create a Post"></Form>
</template>
