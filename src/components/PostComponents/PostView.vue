<template>
  <div class="flex flex-col text-white border-b border-b-white/20">
    <div class="text-3xl font-bold">
      <h1>
        {{ title }}
      </h1>

      <div class="flex flex-row gap-2 items-center my-2">
        <div
          class="w-8 h-8 border border-neutral-800 rounded-full bg-gray-400/10 flex items-center justify-center text-sm font-medium text-white/60"
        >
          {{ getNameLetters(author?.name) }}
        </div>
        <div class="text-sm font-normal text-neutral-200">
          <p>
            <RouterLink
              class="hover:text-neutral-300 transition-colors"
              :to="`/author/${author.name}`"
              >{{ author?.name }}</RouterLink
            >
          </p>
        </div>
        <span class="text-xs text-neutral-600">·</span>
        <div class="text-sm tracking-wide font-normal text-white/50">
          <p>{{ date }}</p>
        </div>
      </div>
    </div>

    <div class="flex py-7 text-white">
      <p v-html="content"></p>
    </div>

    <div class="flex flex-row items-center gap-2">
      <div
        @click="likePost()"
        :class="
          liked
            ? 'border-blue-500 text-blue-400 hover:text-blue-500'
            : 'hover:border-neutral-600 border-neutral-800 text-neutral-400'
        "
        class="flex transition-colors hover:cursor-pointer items-center rounded border my-4 w-fit gap-2 py-2 px-4 bg-neutral-900"
      >
        <div class="text-sm">
          <i
            class="pi"
            :class="liked ? 'pi pi-thumbs-up-fill' : 'pi pi-thumbs-up'"
          ></i>
        </div>
        <div class="">
          <p>{{ like_count }}</p>
        </div>
      </div>

      <div
        @click="savePost()"
        :class="
          saved
            ? 'border-blue-500 text-blue-500'
            : 'border-neutral-800 hover:border-neutral-700 text-neutral-400'
        "
        class="bg-neutral-900 border transition-colors rounded hover:cursor-pointer py-2 px-4"
      >
        <i class="pi" :class="saved ? 'pi-bookmark-fill' : 'pi-bookmark'"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/api/axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const author = defineModel();

const post = defineProps({
  id: Number,
  date: String,
  title: String,
  content: String,
  likeCount: Number,
  userLiked: String,
  userSaved: Boolean,
});

const saved = ref(post.userSaved);

const savePost = async () => {
  try {
    await api.post(`/posts/${post.id}/bookmark`);
  } catch (error) {
    console.error("Error bookmarking the post", error);
  } finally {
    saved.value = !saved.value;
  }
};

const liked = ref(false);
const like_count = ref(post.likeCount);
const user_liked = ref(post.userLiked);
if (user_liked.value === "true") {
  liked.value = true;
}

const likePost = async () => {
  liked.value = !liked.value;
  if (liked.value === true) {
    like_count.value++;
  } else {
    like_count.value--;
  }
  try {
    await api.post(`/posts/${post.id}/like`);
  } catch (error) {
    console.error("Error liking the post", error);
  }
};

const getNameLetters = (author) => {
  if (!author || typeof author !== "string") {
    return "";
  }
  let letters = author[0];
  const splits = author.split(" ");
  if (splits.length > 1) {
    letters += splits[1][0];
  }
  return letters;
};
</script>
