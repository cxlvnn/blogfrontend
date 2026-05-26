import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CreatePost from "@/views/CreatePost.vue";
import Post from "@/views/Post.vue";
import Profile from "@/views/Profile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { hideHeader: false },
    },

    {
      path: "/posts/create",
      name: "posts.create",
      component: CreatePost,
      meta: { hideHeader: false },
    },

    {
      path: "/posts/:id",
      name: "posts.view",
      component: Post,
      meta: { hideHeader: false },
    },

    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: { hideHeader: false },
    },

    {
      path: "/me",
      name: "me",
      component: Profile,
      meta: { hideHeader: false },
    },
  ],
});

export default router;
