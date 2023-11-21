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

        <!-- Card Section -->
        <div v-if="data?.length > 0" class="max-w-5xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8 mx-auto">
            <!-- Grid -->
            <div class="grid gap-3 sm:gap-6">
                <!-- Card -->
                <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#">
                    <div class="p-4 md:p-5">
                        <div class="flex">
                            <svg class="mt-1 flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>

                            <div class="grow ms-5">
                                <h3
                                    class="group-hover:text-orange-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                    Progress Check
                                </h3>
                                <p class="text-sm text-gray-500">
                                    Currently, you are working on:

                                    <span v-if="data[0].progress.skill === 'Cadet'"
                                        class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">{{
                                            data[0].progress.title }}</span>
                                    <span v-else-if="data[0].progress.skill === '3D Design'"
                                        class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">{{
                                            data[0].progress.title }}</span>
                                    <span v-else-if="data[0].progress.skill === 'Coding'"
                                        class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">{{
                                            data[0].progress.title }}</span>
                                    <span v-else-if="data[0].progress.skill === 'Game & Animation'"
                                        class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">{{
                                            data[0].progress.title }}</span>
                                </p>
                                <p class="mt-2 text-xs text-gray-500 dark:text-gray-500">
                                    Last updated: <strong>{{ dayjs(data[0].updated_at).format("dddd, MMMM D, YYYY h:mm A")
                                    }}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <!-- End Card -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Card Section -->

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
    title: 'Coder Credentials | Debug Lab'
})

// Initialise client
const client = useSupabaseClient();
const route = useRoute();
// Initialise dayJS
const dayjs = useDayjs();

const { data: coderData, error: coderError } = await client
    .from('coders')
    .select()
    .eq('username', route.query.username)
    .limit(1)

const { data: data, error: error } = await client
    .from('logbook')
    .select(`
    id,
    classes (
      title
    ),
    coders (
      full_name
    ),
    progress (
      title,
      skill
    ),
    comment,
    class_date,
    updated_at
  `)
    .eq('coder_id', coderData[0]?.id)
    .order('class_date', { ascending: false })
    .limit(1)

console.log(data)

</script>

<style scoped></style>