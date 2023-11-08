<template>
    <div ref="scrollTopButton" class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition">
        <div class="text-gray-400 hover:text-blue-400 transition">
            <button type="button" @click="scrollToTop"
                class="!fixed bottom-5 right-5 rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
                id="btn-back-to-top">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="h-4 w-4" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            const scrollBtn = this.$refs.scrollTopButton;

            if (window.scrollY > 0) {
                scrollBtn.classList.remove("invisible");
            } else {
                scrollBtn.classList.add("invisible");
            }
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
    },
});
</script>

<style scoped></style>