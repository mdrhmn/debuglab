<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { notify } from "notiwind"

onMounted(async () => {
    const client = useSupabaseClient();
    const authStore = useAuthStore();

    const { error } = await client.auth.signOut();
    if (error) return;

    // Reset store
    authStore.$reset();
    authStore.session = null;

    // Push notification
    notify({
        title: "Success",
        text: "Logged out successfully",
        type: "success",
        group: "foo",
    }, 4000)

    // Redirect to Login page
    await navigateTo('/login');
})
</script>

<style scoped></style>