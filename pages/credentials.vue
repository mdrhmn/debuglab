<template>
    <div v-if="coderData?.length > 0">
        <!-- Hero -->
        <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10">
                <div class="text-center">
                    <h1 class="mt-10 text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
                        Hi, {{ coderData[0].full_name }}! 👋🏻
                    </h1>

                    <p class="mt-3 text-xl text-gray-600 dark:text-gray-400">
                        The following are your learning credentials. Good luck and all the best! 💪🏻
                    </p>
                </div>
            </div>
        </div>

        <CredentialsList />
    </div>
    <div v-else>
        <CredentialsError />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

useHead({
    title: 'Credentials | Debug Lab'
})

// Initialise client
const client = useSupabaseClient();
const route = useRoute();

const { data: coderData, error: coderError } = await client
    .from('coders')
    .select()
    .eq('username', route.query.username)
    .limit(1)
</script>

<style scoped></style>