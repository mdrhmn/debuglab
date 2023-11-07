<template>
    <!-- Clients -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our <span
                    class="text-orange-500 dark:text-orange-600">Platforms</span></h2>
            <p class="mt-1 text-gray-600 dark:text-gray-400">The tools, platforms and softwares we used are all
                widely-available and
                recognised by the development and tech community.</p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-6">
            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                    src="https://members-csforall.imgix.net/members/logos/codecombat-logo.png">
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/2560px-Khan_Academy_logo_%282018%29.svg.png">
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo-tinkercad-wordmark.svg/1200px-Logo-tinkercad-wordmark.svg.png">
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                    src="https://members-csforall.imgix.net/members/logos/codecombat-logo.png">
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Scratchlogo.svg/1280px-Scratchlogo.svg.png">
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-8 h-auto md:w-12 lg:w-12 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png">
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png">
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_Blender.svg/1200px-Logo_Blender.svg.png">
            </div>

            <!-- <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" xmlns="http://www.w3.org/2000/svg"
                    width="2500" height="1036" viewBox="0 -6.166 294.398 121.975">
                    <path
                        d="M12.139 90.511c-3.939 0-7.799-.479-10.938-1.292l.487-8.277c3.053 1.123 7.313 2.012 11.254 2.012 5.952 0 10.775-2.492 10.775-8.359C23.718 63.172 0 68.002 0 50.466c0-9.325 7.315-15.834 19.941-15.834 3.214 0 6.51.397 9.809.959l-.485 7.802c-3.132-.963-6.591-1.527-9.806-1.527-6.754 0-10.211 3.134-10.211 7.638 0 10.855 23.72 6.839 23.72 23.798-.005 9.973-7.882 17.209-20.829 17.209M54.106 90.264c-2.249 0-3.938-.076-6.03-.479v17.397h-8.601V49.746h8.12c0 2.094-.082 5.309-.484 7.476h.162c2.25-5.068 6.833-8.283 12.944-8.283 9.487 0 14.712 6.75 14.712 18.814.001 14.076-7.473 22.511-20.823 22.511m3.861-34.246c-6.434 0-9.892 7.558-9.892 14.384v12.312c1.852.562 3.86.804 6.272.804 6.833 0 11.497-4.182 11.497-14.958.001-8.039-2.49-12.542-7.877-12.542zM102.519 57.381C94.561 55.936 90.7 61.485 90.7 73.466v16.238h-8.606V49.746H90.3c0 2.246-.246 5.791-.809 8.844h.162c1.771-5.388 5.79-10.377 13.271-9.651l-.405 8.442M114.803 43.797c-3.056 0-5.55-2.414-5.55-5.393 0-2.971 2.494-5.385 5.55-5.385 2.974 0 5.467 2.333 5.467 5.385 0 2.979-2.493 5.393-5.467 5.393m4.26 45.907h-8.6V49.746h8.6v39.958zM154.449 89.704V63.975c0-4.982-1.374-7.875-5.951-7.875-6.03 0-10.457 6.345-10.457 14.302v19.303h-8.603V49.746h8.203c0 2.094-.162 5.546-.563 7.796l.082.075c2.33-5.141 7.157-8.68 13.91-8.68 9.084 0 11.9 5.711 11.9 12.787v27.979h-8.521M186.675 90.425c-8.524 0-11.1-3.294-11.1-12.214V56.417h-7.634v-6.671h7.634V37.04l8.523-2.333v15.039h10.532v6.671h-10.448v19.137c0 5.954 1.205 7.558 5.224 7.558 1.769 0 3.699-.24 5.226-.643v7.076c-2.331.486-5.307.88-7.957.88" />
                    <path
                        d="M233.712 78.636c11.72-15.086 20.938-32.809 20.938-45.537 0-6.652-4.765-11.295-10.978-14.823.123 13.831-4.668 46.263-9.96 60.36M195.279 115.809c27.47-9.188 67.29-30.598 94.985-49.725 2.324-1.6 4.135-3.085 4.135-5.685 0-4.519-8.275-10.576-12.292-12.987-21.792 22.653-65.163 56.596-86.828 68.397"
                        fill="#ffdd05" />
                    <path
                        d="M220.76 96.567c16.938-11.709 41.545-33.739 49.873-45.727 1.963-2.82 3.416-4.454 3.416-7.405 0-4.839-5.644-8.382-9.703-10.849-9.727 22.924-31.579 51.469-43.586 63.981M236.192 64.087c2.191-14.477.903-31.952-1.894-42.913-1.521-5.969-6.901-12.706-11.88-14.812 6.526 18.522 12.128 44.898 13.774 57.725"
                        fill="#ffdd05" />
                    <path
                        d="M231.367 43.779C226.235 29.91 213.446.998 194.633-6.165c12.247 13.516 30.417 40.337 36.734 49.944"
                        fill="#ffdd05" />
                </svg>
            </div>

            <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
                <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2500 816">
                    <g clip-path="url(#a)">
                        <path
                            d="M307.9 0H330a303.4 303.4 0 0 1 207.7 87.7c-20.2 20.6-40.7 40.3-60.5 60.9-30.6-27.7-67.5-49.1-107.8-56.7A227.9 227.9 0 0 0 196 124.7a227.3 227.3 0 0 0-99.4 160.6 233.5 233.5 0 0 0 50.7 180.4 224.5 224.5 0 0 0 163.6 80.5c58.7 3.4 120-14.7 162.8-55.8 33.5-29 49-73 54-115.7-69.5 0-139.2.4-208.8 0v-86.5H612c15.1 92.7-6.7 197.2-77.2 263.5-47 47-112 74.6-178.3 80A327.4 327.4 0 0 1 169 595 322.8 322.8 0 0 1 19.3 424a309.3 309.3 0 0 1-2.1-209.3 319.4 319.4 0 0 1 115.4-153A329.3 329.3 0 0 1 307.9 0Z"
                            fill="#3780FF" />
                        <path d="M1990 21.9h89.7v599c-29.8 0-60 .4-89.8-.4.4-199.3 0-399 0-598.6Z" fill="#38B137" />
                        <path
                            d="M811.7 229.5a210.8 210.8 0 0 1 161 34.4 197 197 0 0 1 79.3 125.9c11.3 58.3-3 122-40.7 168.2A205 205 0 0 1 839 633a204.1 204.1 0 0 1-152.7-81.8c-39.8-53.6-49.5-127.5-27.6-190.4 21.8-67.5 83.4-119.1 153-131.3Zm12.5 79.7a112.8 112.8 0 0 0-58.7 37.3c-40.7 48.7-38.2 128 6.7 173.3a111.7 111.7 0 0 0 177.9-26.4c27.7-50 19.7-118.7-22.7-157.8a113.2 113.2 0 0 0-103.2-26.4Z"
                            fill="#FA3913" />
                        <path
                            d="M1256.3 229.5c63.3-12.1 132.5 5.5 180 50 77.1 69.1 85.5 198.8 19.7 278.5a204.7 204.7 0 0 1-168.3 75 202.6 202.6 0 0 1-156.8-81.8c-40.7-54.9-49.5-130.4-26.5-194.6a199.2 199.2 0 0 1 151.9-127Zm12.6 79.7a114.7 114.7 0 0 0-58.8 37c-40.2 47.7-38.5 125.8 4.7 171.5a112.2 112.2 0 0 0 102.3 33.1 115 115 0 0 0 78-57.4c27.3-50.4 19.3-119.2-23.5-158.2a112.4 112.4 0 0 0-102.7-26Z"
                            fill="#FCBD06" />
                        <path
                            d="M1633.4 253.8c48.2-30.2 112.4-38.5 164.4-12.5 16.4 7 29.8 19.3 42.8 31.4.4-11.3 0-23 .4-34.8 28.1.4 56.2 0 84.8.4v370c-.5 55.8-14.7 115-55 155.6-44 44.9-111.6 58.7-172.4 49.5-65-9.6-121.6-57-146.8-117 25.2-12.2 51.6-21.8 77.6-33.2 14.7 34.4 44.5 63.8 81.8 70.5 37.3 6.7 80.5-2.5 104.9-33.5 26-32 26-75.5 24.7-114.6-19.3 19-41.5 35.7-68.4 42-58.3 16.3-122.5-3.8-167.3-43.2a205.5 205.5 0 0 1-69.7-160.7 207.4 207.4 0 0 1 98.2-169.9Zm86.8 53.7a110.4 110.4 0 0 0-65.8 38.2c-39.5 47-39.5 122 .4 168.2a109.8 109.8 0 0 0 94.4 38.6 106.6 106.6 0 0 0 80-53.3c27.8-49 23.1-115.7-14.2-158.5-23-26.4-60-39.5-94.8-33.2Z"
                            fill="#3780FF" />
                        <path
                            d="M2187.5 275.2c50.3-47 128-62.9 192.5-38.1 61.3 23 100.3 81.3 120 141.3-91 37.8-181.6 75.1-272.7 112.9 12.6 23.9 32 45.7 58 54.5 36.4 13 80 8.4 110.7-16a178.1 178.1 0 0 0 31-33c23 15.4 46.2 30.5 69.2 46a202 202 0 0 1-146.8 89c-65.4 8-135-17.2-177.4-68.4-69.7-80.5-63-215.6 15.5-288.2Zm44.9 77.6a119.8 119.8 0 0 0-19.7 70.5 33573 33573 0 0 0 182.4-76c-10-23.4-34.4-37.7-59.1-41.4-39.9-7.2-81.4 14.2-103.6 47Z"
                            fill="#FA3913" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0H2500V816H0z" />
                        </clipPath>
                    </defs>
                </svg>
            </div> -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Clients -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>