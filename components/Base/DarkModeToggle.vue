<template>
    <Switch v-model="darkMode.isDarkMode" @click="toggleDarkMode"
        :class="darkMode.isDarkMode ? 'bg-blue-800' : 'bg-sky-400'"
        class="relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ml-4 my-1.5">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" :class="darkMode.isDarkMode ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
    </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const colorMode = useColorMode()
const darkMode = useDarkMode()

const toggleDarkMode = computed(() => {
    if (darkMode.isDarkMode) {
        colorMode.preference = "dark"
        darkMode.$patch({ isDarkMode: true })
    }
    else {
        colorMode.preference = "light"
        darkMode.$patch({ isDarkMode: false })
    }
})
</script>

<style scoped></style>