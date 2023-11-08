<template>
    <!-- Masonry Cards -->
    <div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"><span
                    class="text-orange-500 dark:text-orange-600">Life</span> at Debug Lab</h2>
            <p class="mt-1 text-gray-600 dark:text-gray-400">Some of the captured moments here at Debug Lab.</p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid sm:grid-cols-12 gap-6">
            <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                <!-- Card -->
                <a
                    class="group relative block rounded-xl shadow-lg overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                            src="~/assets/img/gallery_1_cropped.png" alt="Image Description">
                    </div>
                    <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div
                            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Nurturing Presentation Skills
                        </div>
                    </div>
                </a>
                <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
                <!-- Card -->
                <a
                    class="group relative block rounded-xl shadow-lg overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                            src="~/assets/img/gallery_3.jpg" alt="Image Description">
                    </div>
                    <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div
                            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Collaborative Learning
                        </div>
                    </div>
                </a>
                <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="col-span-12 md:col-span-4">
                <!-- Card -->
                <a
                    class="group relative block rounded-xl shadow-lg overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                            src="~/assets/img/gallery_4.jpg" alt="Image Description">
                    </div>
                    <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div
                            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Fun Learning
                        </div>
                    </div>
                </a>
                <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="col-span-12 sm:col-span-6 md:col-span-4">
                <!-- Card -->
                <a
                    class="group relative block rounded-xl shadow-lg overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                            src="~/assets/img/gallery_5.jpg" alt="Image Description">
                    </div>
                    <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div
                            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Fun Events
                        </div>
                    </div>
                </a>
                <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="col-span-12 sm:col-span-6 md:col-span-4">
                <!-- Card -->
                <a
                    class="group relative block rounded-xl shadow-lg overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                            src="~/assets/img/gallery_2.jpg" alt="Image Description">
                    </div>
                    <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div
                            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Conducive Classroom
                        </div>
                    </div>
                </a>
                <!-- End Card -->
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Masonry Cards -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>