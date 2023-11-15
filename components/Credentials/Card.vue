<template>
    <div
        class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <img format="webp" data-sizes="auto" class="lazyload object-cover h-64 flex flex-col justify-center items-center rounded-t-xl"
            :src="platformData[0].logo_url" />
        <div class="p-4 md:p-6">
            <!-- <span class="block mb-1 text-xs font-semibold uppercase text-orange-600 dark:text-orange-500">
                {{ platformData[0].name }}
            </span> -->

            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {{ platformData[0].name }}
            </h3>

            <div v-if="data.username" class="mt-5">
                <!-- <div class="flex mt-5">
                    <UserIcon class="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" aria-hidden="true" />

                    <div class="grow ml-5">
                        <h3 class="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                            Username
                        </h3>
                        <p class="text-sm text-gray-500">
                            {{ data.username }}
                        </p>
                    </div>
                </div> -->

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>

                <div class="relative">
                    <input :id="platformData[0].name.replace(/\s+/g, '-').toLowerCase() + '-username'" readonly
                        :value="data.username"
                        class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                        placeholder="Username" required>

                    <div class="hs-tooltip [--trigger:click]">
                        <button
                            @click="copyToClipboard(platformData[0].name.replace(/\s+/g, '-').toLowerCase() + '-username')"
                            class="hs-tooltip-toggle text-white absolute right-2 bottom-2 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                            <svg class="w-4 h-4 stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="none">
                                    <path d="M7.75 7.757V6.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-.992"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M3.75 10.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-6.5z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span
                                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
                                role="tooltip">
                                Copied
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="data.password" class="mt-5">
                <!-- <div class="flex mt-5">
                    <KeyIcon class="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" aria-hidden="true" />

                    <div class="grow ml-5">
                        <h3 class="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                            Password
                        </h3>
                        <p class="text-sm text-gray-500">
                            {{ data.password }}
                        </p>
                    </div>
                </div> -->

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

                <div class="relative">
                    <input :id="platformData[0].name.replace(/\s+/g, '-').toLowerCase() + '-password'" readonly
                        :value="data.password"
                        class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                        placeholder="Password" required>

                    <div class="hs-tooltip [--trigger:click]">
                        <button
                            @click="copyToClipboard(platformData[0].name.replace(/\s+/g, '-').toLowerCase() + '-password')"
                            class="hs-tooltip-toggle text-white absolute right-2 bottom-2 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                            <svg class="w-4 h-4 stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="none">
                                    <path d="M7.75 7.757V6.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-.992"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M3.75 10.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-6.5z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span
                                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
                                role="tooltip">
                                Copied
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- <div class="flex">
                <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </span>
                <input type="text" id="website-admin"
                    class="rounded-none  bg-gray-50 border text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="elonmusk">
                <button
                    class="text-white relative rounded-l-none bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                    <svg class="w-4 h-4 stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="none">
                            <path d="M7.75 7.757V6.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-.992"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M3.75 10.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-6.5z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </g>
                    </svg>
                </button>
            </div> -->
        </div>

        <div
            class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                style="cursor: pointer" target="_blank" :href="platformData[0].url">
                Go to Platform
            </a>
            <a v-if="data.link"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                style="cursor: pointer" target="_blank" :href="data.link">
                Go to Link
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserIcon, KeyIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    data: { type: Object, required: true, default: null },
});

const client = useSupabaseClient();

const { data: platformData, error: platformError } = await client
    .from('platforms')
    .select()
    .eq('id', props.data.platform_id)

// Reference: https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/
const copyToClipboard = (id: string) => {
    console.log(id)
    let copyText = document.getElementById(id).value;
    navigator.clipboard.writeText(copyText).then(() => { });
}
</script>

<style scoped></style>