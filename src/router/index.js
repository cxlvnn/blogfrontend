import { createRouter, createWebHistory } from "vue-router";

import Landing from "@/views/Landing.vue";
import CreatePost from "@/views/CreatePost.vue";
import Post from "@/views/Post.vue";
import Profile from "@/views/Profile.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Posts from "@/views/Posts.vue";
import Author from "@/views/Author.vue";
import { useAuthStore } from "@/stores/authStore";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },

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
      meta: { hideHeader: false, requiresAuth: true },
    },

    {
      path: "/posts/create",
      name: "posts.create",
      component: CreatePost,
      meta: { hideHeader: false, requiresAuth: true },
    },

    {
      path: "/posts/:id",
      name: "posts.view",
      component: Post,
      meta: { hideHeader: false, requiresAuth: true },
    },

    {
      path: "/author/:authorName",
      name: "author",
      component: Author,
      meta: { hideHeader: false, requiresAuth: true },
      props: true,
    },

    {
      path: "/me",
      name: "me",
      component: Profile,
      meta: { hideHeader: false, requiresAuth: true },
    },

    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { hideHeader: true, guest: true },
    },

    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { hideHeader: true, guest: true },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth) {
    const isLoggedIn = await authStore.checkIfLoggedIn();
    if (!isLoggedIn) {
      return { name: "login" };
    }
  }

  if (to.meta.guest) {
    const isLoggedIn = await authStore.checkIfLoggedIn();
    if (isLoggedIn) {
      return { name: "home" };
    }
  }

  return true;
});

export default router;
