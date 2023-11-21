<template>
    <!-- Team -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our <span
                    class="text-orange-500 dark:text-orange-600">Coaches</span></h2>
            <p class="mt-1 text-gray-600 dark:text-gray-400">Always giving our all for our students.</p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                class="flex flex-col rounded-xl shadow-lg p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                <div class="flex items-center gap-x-4">
                    <img format="webp" data-sizes="auto" class="lazyload rounded-full w-20 h-20"
                        src="~/assets/img/irfan.jpeg" alt="Image Description" />
                    <div class="grow">
                        <h3 class="font-medium text-gray-800 dark:text-gray-200">
                            Irfan Mazuki
                        </h3>
                        <p class="text-xs text-gray-500">
                            Front-end & Back-end Teacher
                        </p>
                        <p class="text-xs text-gray-500">
                            Working as Software Engineer in MNC Company
                        </p>
                    </div>
                </div>

                <p class="mt-3 text-gray-500">
                    "<span class="italic">It's important to make sure the <strong>content</strong> and <strong>learning
                            materials</strong> are <strong>aligned</strong> with
                        the <strong>industry needs</strong>.</span>"
                </p>
            </div>
            <!-- End Col -->

            <div
                class="flex flex-col rounded-xl shadow-lg p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                <div class="flex items-center gap-x-4">
                    <img format="webp" class="rounded-full w-20 h-20" src="~/assets/img/meijen.jpeg"
                        alt="Image Description" />
                    <div class="grow">
                        <h3 class="font-medium text-gray-800 dark:text-gray-200">
                            Liew Mei Jen
                        </h3>
                        <p class="text-xs text-gray-500">
                            Coding Teacher
                        </p>
                        <p class="text-xs text-gray-500">
                            6 years experience in industry
                        </p>
                    </div>
                </div>

                <p class="mt-3 text-gray-500">
                    "<span class="italic"><strong>Programming</strong> is not about writing code; it's about
                        <strong>thinking</strong>.</span>"
                </p>

            </div>
            <!-- End Col -->

            <div
                class="flex flex-col rounded-xl shadow-lg p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                <div class="flex items-center gap-x-4">
                    <img format="webp" data-sizes="auto" class="lazyload rounded-full w-20 h-20"
                        src="~/assets/img/kiefer.jpeg" alt="Image Description" />
                    <div class="grow">
                        <h3 class="font-medium text-gray-800 dark:text-gray-200">
                            Kiefer Chen
                        </h3>
                        <p class="text-xs text-gray-500">
                            Coding & 3D Modelling Teacher
                        </p>
                        <p class="text-xs text-gray-500">
                            42KL Programming School Graduate
                        </p>
                    </div>
                </div>

                <p class="mt-3 text-gray-500">
                    "<span class="italic">If you're not <strong>making mistakes</strong>, you're <strong>not trying hard
                            enough</strong>.</span>"
                </p>

            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Team -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>