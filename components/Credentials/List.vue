<template>
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <template v-for="credential in credentialsData">
                <CredentialsCard :data="credential" />
            </template>
        </div>
        <!-- End Grid -->
    </div>

    <!-- End Card Blog -->
</template>

<script setup lang="ts">
// Initialise client
const client = useSupabaseClient();
const route = useRoute();

const { data: coderData, error: coderError } = await client
    .from('coders')
    .select()
    .eq('username', route.query.username)
    .limit(1)

// Get user survey result
const { data: credentialsData, error: credentialsError } = await client
    .from('credentials')
    .select()
    .eq('coder_id', coderData[0]?.id)
    .order('updated_at', { ascending: false })
</script>

<style scoped></style>