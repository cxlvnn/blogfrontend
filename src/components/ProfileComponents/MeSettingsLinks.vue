<template>
  <div class="flex flex-col my-7 text-white">
    <div class="text-sm my-1 font-bold text-neutral-500 pb-2">
      <p>ACCOUNT</p>
    </div>
    <div class="flex flex-col">
      <div class="text-neutral-200 py-1">
        <div class="border-b border-b-white/20 py-2">
          <p class="py-2">
            <RouterLink
              class="hover:text-blue-400 transition-colors"
              to="/me/settings"
            >
              Edit Profile
            </RouterLink>
          </p>
        </div>

        <div class="border-b border-b-white/20 py-2">
          <p class="py-2">
            <RouterLink
              class="hover:text-blue-400 transition-colors"
              to="/me/settings/password"
            >
              Change Password
            </RouterLink>
          </p>
        </div>

        <div class="border-b border-b-white/20 py-2">
          <p class="py-2">
            <RouterLink
              class="text-red-600 hover:text-red-700 transition-colors"
              to="/me/settings/delete"
            >
              Delete Account
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
