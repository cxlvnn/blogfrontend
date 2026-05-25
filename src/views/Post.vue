<template>
  <Post :title="post.title" :content="post.content" :date="post.date" />
</template>

<script setup>
import Post from "@/components/PostComponents/PostView.vue";
import { ref } from "vue";

const post = ref({
  title: "How to move around in vim",
  content:
    "Every project starts as a blank page. The temptation is to over-engineer—to add frameworks, databases, and complex build pipelines before a single word is written. Resist this. <br> A minimal blog is not a toy. It is a foundation. The key is separation of concerns: <br><br> Structure First <br> Keep your content in plain, portable formats (Markdown, JSON). Your presentation layer should consume this data, not own it. This makes future migrations trivial. <br><br> Design Tokens CSS <br> custom properties (variables) allow you to theme without rewriting. A single file of design tokens can scale to a full design system. <br><br> Start here. Add complexity only when it solves a real problem.",
  date: "2026 - 05 - 19",
});
</script>
