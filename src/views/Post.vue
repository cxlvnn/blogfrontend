<template>
  <div v-if="isLoading" class="flex flex-col mt-7 gap-5">
    <div class="py-2 w-1/8 bg-neutral-500/20"></div>
    <PostLoading />
  </div>

  <div v-else class="flex flex-col mt-7 gap-5">
    <BackButton to="/posts" message="All Posts" />
    <Post
      :id="post.id"
      :title="post.title"
      :content="post.body"
      :date="post.createdAt"
      :likeCount="post.likeCount"
      :userLiked="post.userLiked"
      :userSaved="post.userSaved"
      v-model="author"
    />
  </div>
  <div class="flex flex-col gap-4 my-5 text-white">
    <h1 class="font-medium uppercase text-neutral-500">Comments</h1>

    <div class="border-b border-white/15" v-show="comments?.length" v-for="comment in comments">
      <Comment
        :authorName="comment.relationships?.authorName"
        :body="comment.body"
        :date="comment.postedAt"
        :id="comment.id"
      />
    </div>
    <div v-if="comments.length === 0">
      <p class="text-neutral-600">No comments yet</p>
    </div>

    <div class="mt-5">
      <h1 class="font-medium text-neutral-300 text-sm">Add comment</h1>

      <form @submit.prevent="createComment(comment)">
        <textarea
          class="w-full border border-white/15 bg-neutral-900/20 rounded my-2 h-20 p-2 outline-none focus:border-blue-500"
          v-model="comment.body"
        />
        <div class="flex justify-end">
          <Button design="secondary" title="Post comment" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import api from "@/api/axios";
import BackButton from "@/components/GlobalComponents/BackButton.vue";
import Button from "@/components/GlobalComponents/Button.vue";
import PostLoading from "@/components/GlobalComponents/LoadingComponents/PostLoading.vue";
import Comment from "@/components/PostComponents/Comment.vue";
import Post from "@/components/PostComponents/PostView.vue";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const isLoading = ref(true);

const post = ref({});
const author = ref(null);

onMounted(async () => {
  try {
    const response = await api.get(`/posts/${id}`);
    post.value = response.data.data;
    author.value = response.data.data.relationships?.author;
  } catch (error) {
    console.error("Error fetching the post", error);
  } finally {
    isLoading.value = false;
  }
});

const comments = ref([]);

const getComments = async () => {
  try {
    const response = await api.get(`/posts/${id}/comments`);
    comments.value = response.data.data;
  } catch (error) {
    console.error("Error feching comments", error);
  }
};

onMounted(() => {
  getComments();
});

const comment = reactive({
  body: "",
});

const createComment = async (comment) => {
  try {
    const response = await api.post(`/posts/${id}/comments`, comment);
    comments.value.push(response.data.data);
  } catch (error) {
    console.error("Error creating the comment", error);
  }
};
</script>
