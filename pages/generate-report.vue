<template>
    <div class="bg-gray-50 dark:bg-slate-900">

        <!-- Buttons -->
        <div class="mt-6 flex justify-center gap-x-3">
            <!-- <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                @click="printReport()">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Print Report
            </a> -->

            <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-orange-500 text-white hover:bg-orange-600 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                @click="printReport()">
                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Print Report
            </a>
        </div>
        <!-- End Buttons -->

        <!-- Invoice -->
        <div id="report-card" class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
            <div class="sm:w-11/12 lg:w-3/4 mx-auto">
                <!-- Card -->
                <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
                    <!-- Grid -->
                    <div class="flex justify-between">
                        <div>
                            <!-- <svg class="size-10" width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12"
                                    class="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2" />
                                <path
                                    d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12"
                                    class="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2" />
                                <circle cx="13" cy="13.0214" r="5" fill="currentColor"
                                    class="fill-blue-600 dark:fill-white" />
                            </svg> -->

                            <img format="webp" data-sizes="auto" class="lazyload w-56 h-auto"
                                src="~/assets/img/logo-horizontal.png" alt="Logo" />

                            <!-- <h1 class="mt-2 text-lg md:text-xl font-semibold text-orange-500 dark:text-white">Debug Lab
                            </h1> -->
                        </div>
                        <!-- Col -->

                        <div class="text-end">
                            <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Progress
                                Report
                            </h2>

                            <span class="mt-4 block text-gray-500">Debug Lab Skills Learning Center</span>

                            <address class="not-italic text-gray-800 dark:text-gray-200">
                                5-1, Jalan Metro Avenue 1,<br>
                                Metro Avenue, 43000 Kajang,<br>
                                Selangor<br>
                            </address>
                        </div>
                        <!-- Col -->
                    </div>
                    <!-- End Grid -->

                    <!-- Grid -->
                    <div class="mt-8 grid sm:grid-cols-2 gap-3">
                        <div>
                            <!-- <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Bill to:</h3> -->
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ coderData[0].full_name
                                }}</h3>
                            <!-- <address class="mt-2 not-italic text-gray-500">
                                280 Suzanne Throughway,<br>
                                Breannabury, OR 45801,<br>
                                United States<br>
                            </address> -->
                        </div>
                        <!-- Col -->

                        <div class="sm:text-end space-y-2">
                            <!-- Grid -->
                            <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Report date:
                                    </dt>
                                    <dd class="col-span-2 text-gray-500">{{ dayjs(new Date()).format('DD/MM/YYYY') }}
                                    </dd>
                                </dl>
                                <!-- <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due date:</dt>
                                    <dd class="col-span-2 text-gray-500">03/11/2018</dd>
                                </dl> -->
                            </div>
                            <!-- End Grid -->
                        </div>
                        <!-- Col -->
                    </div>
                    <!-- End Grid -->

                    <!-- Card Section -->
                    <div class="pt-6 py-4">
                        <!-- Grid -->
                        <div class="grid gap-3 sm:gap-6">
                            <!-- Card -->
                            <a class="group flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#">

                                <div class="p-4 md:p-5">
                                    <div class="flex">
                                        <svg class="mt-1 flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                        </svg>

                                        <div class="grow ms-5">
                                            <h3
                                                class="font-semibold text-gray-800 dark:text-gray-200">
                                                Progress Check
                                            </h3>
                                            <p class="text-sm text-gray-500">
                                                Currently, you are working on:

                                                <span v-if="logbookData[0].progress.skill === 'Cadet'"
                                                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">{{
                    logbookData[0].progress.title }}</span>
                                                <span v-else-if="logbookData[0].progress.skill === '3D Design'"
                                                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">{{
                    logbookData[0].progress.title }}</span>
                                                <span v-else-if="logbookData[0].progress.skill === 'Coding'"
                                                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">{{
                    logbookData[0].progress.title }}</span>
                                                <span v-else-if="logbookData[0].progress.skill === 'Game & Animation'"
                                                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">{{
                    logbookData[0].progress.title }}</span>
                                            </p>
                                            <p class="mt-2 text-xs text-gray-500 dark:text-gray-500">
                                                Last updated: <strong>{{ dayjs(logbookData[0].updated_at).format("dddd, MMMM D, YYYY h: mm A") }}</strong>
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

                    <!-- Table -->
                    <div class="mt-6">
                        <div class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                            <div class="hidden sm:grid sm:grid-cols-5">
                                <div class="text-xs font-medium text-gray-500 uppercase">Date</div>
                                <!-- <div class="text-start text-xs font-medium text-gray-500 uppercase">Class</div> -->
                                <div class="text-start text-xs font-medium text-gray-500 uppercase">Progress</div>
                                <div class="text-end text-xs font-medium text-gray-500 uppercase">Comment</div>
                            </div>

                            <div class="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                            <div v-for="data in logbookData" class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                <div>
                                    <!-- <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5> -->
                                    <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ data.class_date
                                        }}</p>
                                </div>
                                <!-- <div>
                                    <p class="text-sm text-gray-800 dark:text-gray-200">{{ data.classes?.title }}</p>
                                </div> -->
                                <div>
                                    <p class="text-sm text-gray-800 dark:text-gray-200">
                                        <span v-if="data.progress.skill === 'Cadet'"
                                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">{{
                                            data.progress.title }}</span>
                                        <span v-else-if="data.progress.skill === '3D Design'"
                                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">{{
                                            data.progress.title }}</span>
                                        <span v-else-if="data.progress.skill === 'Coding'"
                                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">{{
                                            data.progress.title }}</span>
                                        <span v-else-if="data.progress.skill === 'Game & Animation'"
                                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">{{
                                            data.progress.title }}</span>
                                    </p>
                                </div>
                                <div class="col-span-3">
                                    <!-- <p class="sm:text-end text-xs text-gray-800 dark:text-gray-200">{{ data.comment }}
                                    </p> -->

                                    <div class="text-xs text-gray-800 dark:text-gray-200" v-html="data.comment" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Table -->

                    <!-- Flex -->
                    <!-- <div class="mt-8 flex sm:justify-end"> -->
                    <!-- <div class="w-full max-w-2xl sm:text-end space-y-2"> -->
                    <!-- Grid -->
                    <!-- <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Subtotal:</dt>
                                    <dd class="col-span-2 text-gray-500">$2750.00</dd>
                                </dl>

                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total:</dt>
                                    <dd class="col-span-2 text-gray-500">$2750.00</dd>
                                </dl>

                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Tax:</dt>
                                    <dd class="col-span-2 text-gray-500">$39.00</dd>
                                </dl>

                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Amount paid:
                                    </dt>
                                    <dd class="col-span-2 text-gray-500">$2789.00</dd>
                                </dl>

                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due balance:
                                    </dt>
                                    <dd class="col-span-2 text-gray-500">$0.00</dd>
                                </dl>
                            </div> -->
                    <!-- End Grid -->
                    <!-- </div> -->
                    <!-- </div> -->
                    <!-- End Flex -->

                    <!-- <div class="mt-8 sm:mt-12">
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Thank you!</h4>
                        <p class="text-gray-500">If you have any questions concerning this invoice, use the following
                            contact information:</p>
                        <div class="mt-2">
                            <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">example@site.com</p>
                            <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">+60 12-765 1253</p>
                        </div>
                    </div> -->

                    <p class="mt-5 text-sm text-gray-500">© {{ new Date().getFullYear() }} Debug Lab</p>
                </div>
                <!-- End Card -->
            </div>
        </div>
        <!-- End Invoice -->
    </div>
</template>

<script setup lang="ts">

// Initialise client
const client = useSupabaseClient();
const route = useRoute();
const dayjs = useDayjs();

const { data: classesData, error: classesError } = await client
    .from('classes')
    .select()
const { data: coderData, error: coderError } = await client
    .from('coders')
    .select()
    .eq('username', "boklim")
    .limit(1)
const { data: progressData, error: progressError } = await client
    .from('progress')
    .select()

const logbookData = ref();

const printReport = () => {
    var printContent = document.getElementById("report-card").innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    document.title = "Progress Report - " + coderData[0].full_name;
    window.print();
    document.body.innerHTML = originalContent;
}

const { data: data, error: error } = await client
    .from('logbook')
    .select(`
    id,
    classes (
      title,
      time
    ),
    coders (
      full_name
    ),
    progress (
      title,
      skill
    ),
    comment,
    class_date
  `).eq('coder_id', coderData[0]?.id)
    .order('class_date', { ascending: false })

logbookData.value = data;

console.log(data);

</script>

<style scoped></style>