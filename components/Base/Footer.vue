<script setup lang="ts">
</script>

<template>
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ new Date().getFullYear() }}
                    <NuxtLink to="/" class="hover:underline">Debug Lab</NuxtLink>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>