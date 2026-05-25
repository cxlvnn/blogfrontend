<template>
  <Post
    v-for="post in posts"
    :date="post.date"
    :title="post.title"
    :content="post.content"
    :key="post.id"
    :to="`posts/${post.id}`"
  />
</template>

<script setup>
import Post from "@/components/PostComponents/Post.vue";

const posts = [
  {
    id: 1,
    title: "How to move around in vim",
    content: "In this post we will look at how to move around in vim",
    date: "2026 - 05 - 19",
  },
  {
    id: 2,
    title: "How to move around in neovim",
    content:
      "In this post we will look at how to move around in neovim, I hope this is gonna be fun, let's get at it",
    date: "2026 - 05 - 19",
  },
  {
    id: 3,
    title: "How to move around in VScode",
    content: "In this post we will look at how to move around in VScode",
    date: "2026 - 05 - 19",
  },
];
</script>
