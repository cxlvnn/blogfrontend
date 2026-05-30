import { createRouter, createWebHistory } from "vue-router";

import Landing from "@/views/Landing.vue";
import CreatePost from "@/views/CreatePost.vue";
import Post from "@/views/Post.vue";
import Profile from "@/views/Profile.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Posts from "@/views/Posts.vue";
import Author from "@/views/Author.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
      meta: { hideHeader: true, hideFooter: true },
    },

    {
      path: "/posts",
      name: "home",
      component: Posts,
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
      path: "/author/:authorName",
      name: "author",
      component: Author,
      meta: { hideHeader: false },
      props: true,
    },

    {
      path: "/me",
      name: "me",
      component: Profile,
      meta: { hideHeader: false },
    },

    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { hideHeader: true },
    },

    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { hideHeader: true },
    },
  ],
});

export default router;
