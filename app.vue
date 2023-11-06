<template>
  <div>
    <NuxtLayout>
      <BasePushNotification />
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const authStore = useAuthStore();

const { data: { session } } = await client.auth.getSession();
authStore.$patch({ session: session });

if (!session && authStore.isLoggedIn) {
  const { data, error } = await client.auth.refreshSession()
  const { session, user } = data
  authStore.$patch({ session: session });
}
</script>

<style></style>
