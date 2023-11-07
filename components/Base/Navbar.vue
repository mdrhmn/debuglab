
<template>
    <header class="sticky top-0 inset-x-0 sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div class="flex items-center justify-between">
                <NuxtLink class="inline-flex items-center gap-x-2 text-xl w-full font-semibold dark:text-white" to="/">
                    <img class="w-40 h-auto" src="~/assets/img/logo-horizontal.png" alt="Logo">
                </NuxtLink>

                <BaseDarkModeToggle />

                <Menu v-if="session && Object.keys(session).length !== 0 && session.constructor === Object" as="div"
                    class="md:hidden lg:hidden relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-700 dark:hover:text-white">
                            {{ session?.user?.user_metadata?.first_name }}
                            {{ session?.user?.user_metadata?.last_name }}
                            <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 text-gray-900 dark:text-white" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button @click="signOut" :class="[
                                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]">
                                    Sign Out
                                </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>

                <div class="sm:hidden">
                    <button type="button"
                        class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2"
                        aria-label="Toggle navigation">
                        <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div id="navbar-image-and-text-2"
                class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                    <NuxtLink to="/" activeClass="text-orange-500 dark:text-white"
                        class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        aria-current="page">
                        Home</NuxtLink>
                    <NuxtLink to="logbook" activeClass="text-orange-500 dark:text-white"
                        class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        aria-current="page">
                        Logbook</NuxtLink>
                    <!-- <NuxtLink to="login" activeClass="text-orange-500 dark:text-white"
                        class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        aria-current="page">
                        Log In</NuxtLink> -->
                    <!-- <NuxtLink to="register" activeClass="text-orange-500 dark:text-white"
                        class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        aria-current="page">
                        Register</NuxtLink> -->
                    <!-- <NuxtLink to="credentials" activeClass="text-orange-500 dark:text-white"
                        class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        aria-current="page">
                        Credentials</NuxtLink> -->
                    <NuxtLink v-if="!session" to="login" activeClass="text-orange-500 dark:text-white"
                        class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        aria-current="page">
                        Login</NuxtLink>
                </div>
            </div>

            <Menu v-if="session && Object.keys(session).length !== 0 && session.constructor === Object" as="div"
                class="hidden md:inline-block relative text-left">
                <div>
                    <MenuButton
                        class="w-max inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-700 dark:hover:text-white">
                        {{ session?.user?.user_metadata?.first_name }}
                        {{ session?.user?.user_metadata?.last_name }}
                        <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 text-gray-900 dark:text-white" aria-hidden="true" />
                    </MenuButton>
                </div>

                <transition enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0">
                    <MenuItems style=" z-index: 999 !important;"
                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                            <button @click="signOut" :class="[
                                active ? 'bg-orange-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                Sign Out
                            </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { notify } from "notiwind"

const client = useSupabaseClient();
const authStore = useAuthStore();
const session = computed(() => authStore.session);

async function signOut() {
    await navigateTo('/logout');
}
</script>

<style scoped></style>