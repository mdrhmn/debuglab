<template>
  <div>
    <NuxtLayout>
      <BasePushNotification />
      <NuxtLoadingIndicator />
      <NuxtPage v-bind:style="{ cursor: selectedCursor }" />
      <BaseScrollToTop />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import 'lazysizes';

const client = useSupabaseClient();
const authStore = useAuthStore();

const { data: { session } } = await client.auth.getSession();
authStore.$patch({ session: session });

if (!session && authStore.isLoggedIn) {
  const { data, error } = await client.auth.refreshSession()
  const { session, user } = data
  authStore.$patch({ session: session });
}

const selectedCursor = `url(""), pointer`;
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s ease;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>