<template>
    <div>
        <!-- Table Section -->
        <div class="w-11/12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Card -->
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div
                            class="bg-white border border-gray-200 rounded-xl rounded-b-none border-b-0 shadow-sm overflow-x-hidden dark:bg-slate-900 dark:border-gray-700">

                            <!-- Header -->
                            <div
                                class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                                <div>
                                    <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                        Logbooks
                                    </h2>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">
                                        Students' daily progress check-ins.
                                    </p>
                                </div>

                                <div>
                                    <div class="inline-flex gap-x-2">
                                        <div class="flex justify-end gap-x-2">
                                            <select v-model="searchField"
                                                class="py-2 px-3 pe-9 block w-64 border-gray-200 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                                <option value="" disabled hidden>Class</option>
                                                <option selected value="classes.title">Class</option>
                                                <option value="coders.full_name">Name</option>
                                            </select>

                                            <!-- Input -->
                                            <div class="sm:col-span-1">
                                                <label for="hs-as-table-product-review-search"
                                                    class="sr-only">Search</label>
                                                <div class="relative">
                                                    <input v-model="searchValue" type="text"
                                                        id="hs-as-table-product-review-search"
                                                        name="hs-as-table-product-review-search"
                                                        class="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                        placeholder="Search">
                                                    <div
                                                        class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                                                        <svg class="h-4 w-4 text-gray-400"
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" viewBox="0 0 16 16">
                                                            <path
                                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Input -->

                                            <div class="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                <button @click="openCreateModal"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path d="M5 12h14" />
                                                        <path d="M12 5v14" />
                                                    </svg>
                                                    Create
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- End Header -->
                        </div>
                    </div>
                </div>

                <!-- Table -->
                <EasyDataTable table-class-name="logbook-table" :headers="headers" :items="logbookData"
                    theme-color="#ea580c" :search-field="searchField" :search-value="searchValue" :sort-by="sortBy"
                    :sort-type="sortType" alternating buttons-pagination>
                    <template #loading>
                        <img format="webp" data-sizes="auto" class="lazyload"
                            src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                            style="width: 100px; height: 80px;" />
                    </template>
                    <template #empty-message>
                        <div
                            class="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                            <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                                <svg class="w-10 h-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" x2="2" y1="12" y2="12" />
                                    <path
                                        d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                    <line x1="6" x2="6.01" y1="16" y2="16" />
                                    <line x1="10" x2="10.01" y1="16" y2="16" />
                                </svg>
                                <p class="mt-5 text-sm text-gray-800 dark:text-gray-300">
                                    No data to show
                                </p>
                            </div>
                        </div>
                    </template>
                    <template #item-progress.title="item">
                        <span v-if="item.progress.skill === 'Cadet'"
                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">{{
                                item.progress.title }}</span>
                        <span v-else-if="item.progress.skill === '3D Design'"
                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">{{
                                item.progress.title }}</span>
                        <span v-else-if="item.progress.skill === 'Coding'"
                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">{{
                                item.progress.title }}</span>
                        <span v-else-if="item.progress.skill === 'Game & Animation'"
                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">{{
                                item.progress.title }}</span>
                    </template>
                    <template #item-comment="item">
                        <template v-if="item.comment !== null">
                            <template v-if="item.comment.trim().length === 0">
                                —
                            </template>
                            <template v-else>
                                <div style="white-space: pre-wrap;">
                                    <div v-html="item.comment" />
                                </div>
                            </template>
                        </template>
                        <template v-else>
                            —
                        </template>
                    </template>
                    <template #item-action="item">
                        <div class="px-6 py-1.5 flex justify-end">
                            <div
                                class="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-lg transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700">
                                <div class="hs-tooltip inline-block">
                                    <button @click="openEditModal(item)" type="button"
                                        class="hs-tooltip-toggle py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-s-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>

                                        <span
                                            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Edit
                                        </span>
                                    </button>
                                </div>

                                <div class="hs-tooltip inline-block">
                                    <button type="button" @click="openDeleteModal(item)"
                                        class="hs-tooltip-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-e-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-600 transition-all text-sm dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                        href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        <span
                                            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Delete
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                </EasyDataTable>
            </div>
            <!-- End Card -->

            <!-- Create Modal -->
            <TransitionRoot appear :show="isOpenCreateModal" as="template">
                <Dialog as="div" @close="closeCreateModal" class="relative z-10">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black/25" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">

                                <DialogPanel
                                    class="dark:bg-slate-900 w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <DialogTitle as="h3"
                                        class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                        Log Student Progress
                                    </DialogTitle>

                                    <Form v-slot="{ errors }" :validation-schema="logbook" @submit="onCreateSubmit"
                                        @invalid-submit="onInvalidSubmit">
                                        <div class="mt-6 grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label for="date"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>

                                                <Field v-slot="{ field, errorMessage }" name="date">
                                                    <VueTailwindDatePicker v-bind="field" :formatter="formatter"
                                                        placeholder="Select date" as-single />
                                                    <p
                                                        class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                                        {{ errorMessage }}</p>
                                                </Field>
                                            </div>

                                            <div>
                                                <label for="class"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
                                                <Field v-slot="{ field, errorMessage }" name="class">
                                                    <Combobox v-bind="field" v-model="selectedClass">
                                                        <div class="relative mt-1">
                                                            <div
                                                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                                <ComboboxInput
                                                                    class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                                    :displayValue="(person) => person.title"
                                                                    @change="query = $event.target.value" />
                                                                <ComboboxButton
                                                                    class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true" />
                                                                </ComboboxButton>
                                                            </div>

                                                            <TransitionRoot leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100" leaveTo="opacity-0"
                                                                @after-leave="query = ''">
                                                                <ComboboxOptions
                                                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                                    <div v-if="filteredClasses.length === 0 && query !== ''"
                                                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                        Nothing found.
                                                                    </div>

                                                                    <ComboboxOption v-for="person in filteredClasses"
                                                                        as="template" :key="person.id" :value="person"
                                                                        v-slot="{ selected, active }">
                                                                        <li class="relative cursor-default select-none py-2 pl-10 pr-4"
                                                                            :class="{
                                                                                'bg-teal-600 text-white': active,
                                                                                'text-gray-900': !active,
                                                                            }">
                                                                            <span class="block truncate"
                                                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                                {{ person.title }}
                                                                            </span>
                                                                            <span v-if="selected"
                                                                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                                                :class="{ 'text-white': active, 'text-teal-600': !active }">
                                                                                <CheckIcon class="h-5 w-5"
                                                                                    aria-hidden="true" />
                                                                            </span>
                                                                        </li>
                                                                    </ComboboxOption>
                                                                </ComboboxOptions>
                                                            </TransitionRoot>
                                                        </div>
                                                    </Combobox>
                                                    <p
                                                        class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                                        {{ errorMessage }}</p>
                                                </Field>
                                            </div>

                                            <div>
                                                <label for="name"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                <Field v-slot="{ field, errorMessage }" name="name">
                                                    <Combobox v-bind="field" v-model="selectedName">
                                                        <div class="relative mt-1 ">
                                                            <div
                                                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                                <ComboboxInput
                                                                    class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                                    :displayValue="(person) => person.full_name"
                                                                    @change="query = $event.target.value" />
                                                                <ComboboxButton
                                                                    class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true" />
                                                                </ComboboxButton>
                                                            </div>

                                                            <TransitionRoot leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100" leaveTo="opacity-0"
                                                                @after-leave="query = ''">
                                                                <ComboboxOptions
                                                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                                    <div v-if="filteredNames.length === 0 && query !== ''"
                                                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                        Nothing found.
                                                                    </div>

                                                                    <ComboboxOption v-for="person in filteredNames"
                                                                        as="template" :key="person.id" :value="person"
                                                                        v-slot="{ selected, active }">
                                                                        <li class="relative cursor-default select-none py-2 pl-10 pr-4"
                                                                            :class="{
                                                                                'bg-teal-600 text-white': active,
                                                                                'text-gray-900': !active,
                                                                            }">
                                                                            <span class="block truncate"
                                                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                                {{ person.full_name }}
                                                                            </span>
                                                                            <span v-if="selected"
                                                                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                                                :class="{ 'text-white': active, 'text-teal-600': !active }">
                                                                                <CheckIcon class="h-5 w-5"
                                                                                    aria-hidden="true" />
                                                                            </span>
                                                                        </li>
                                                                    </ComboboxOption>
                                                                </ComboboxOptions>
                                                            </TransitionRoot>
                                                        </div>
                                                    </Combobox>

                                                    <p
                                                        class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                                        {{
                                                            errorMessage }}</p>
                                                </Field>
                                            </div>

                                            <div>
                                                <label for="progress"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Progress</label>
                                                <Field v-slot="{ field, errorMessage }" name="progress">
                                                    <Combobox v-bind="field" v-model="selectedProgress">
                                                        <div class="relative mt-1 ">
                                                            <div
                                                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                                <ComboboxInput
                                                                    class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                                    :displayValue="(person) => person.title"
                                                                    @change="query = $event.target.value" />
                                                                <ComboboxButton
                                                                    class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true" />
                                                                </ComboboxButton>
                                                            </div>

                                                            <TransitionRoot leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100" leaveTo="opacity-0"
                                                                @after-leave="query = ''">
                                                                <ComboboxOptions
                                                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                                    <div v-if="filteredProgress.length === 0 && query !== ''"
                                                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                        Nothing found.
                                                                    </div>

                                                                    <ComboboxOption v-for="person in filteredProgress"
                                                                        as="template" :key="person.id" :value="person"
                                                                        v-slot="{ selected, active }">
                                                                        <li class="relative cursor-default select-none py-2 pl-10 pr-4"
                                                                            :class="{
                                                                                'bg-teal-600 text-white': active,
                                                                                'text-gray-900': !active,
                                                                            }">
                                                                            <span class="block truncate"
                                                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                                {{ person.title }}
                                                                            </span>
                                                                            <span v-if="selected"
                                                                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                                                :class="{ 'text-white': active, 'text-teal-600': !active }">
                                                                                <CheckIcon class="h-5 w-5"
                                                                                    aria-hidden="true" />
                                                                            </span>
                                                                        </li>
                                                                    </ComboboxOption>
                                                                </ComboboxOptions>
                                                            </TransitionRoot>
                                                        </div>
                                                    </Combobox>

                                                    <p
                                                        class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                                        {{
                                                            errorMessage }}</p>
                                                </Field>
                                            </div>
                                        </div>

                                        <div>
                                            <label for="comment"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>

                                            <Field v-slot="{ field, errorMessage }" name="comment">
                                                <!-- <textarea v-bind="field"
                                                    class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                    rows="3" placeholder="Enter comment"></textarea> -->

                                                <BubbleMenu
                                                    class="bg-white dark:bg-gray-700 rounded-xl border border-gray-200"
                                                    :editor="createCommentEditor" :tippy-options="{ duration: 100 }"
                                                    v-if="createCommentEditor">
                                                    <div class="flex align-middle gap-x-0.5 p-2">
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleBold().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('bold') }"
                                                            class="ql-bold w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M14 12a4 4 0 0 0 0-8H6v8" />
                                                                <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleItalic().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('italic') }"
                                                            class="ql-italic w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <line x1="19" x2="10" y1="4" y2="4" />
                                                                <line x1="14" x2="5" y1="20" y2="20" />
                                                                <line x1="15" x2="9" y1="4" y2="20" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleUnderline().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('italic') }"
                                                            class="ql-underline w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                                                                <line x1="4" x2="20" y1="20" y2="20" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleStrike().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('strike') }"
                                                            class="ql-strike w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M16 4H9a3 3 0 0 0-2.83 4" />
                                                                <path d="M14 12a4 4 0 0 1 0 8H6" />
                                                                <line x1="4" x2="20" y1="12" y2="12" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleOrderedList().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('orderedList') }"
                                                            class="ql-list w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            value="ordered" type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <line x1="10" x2="21" y1="6" y2="6" />
                                                                <line x1="10" x2="21" y1="12" y2="12" />
                                                                <line x1="10" x2="21" y1="18" y2="18" />
                                                                <path d="M4 6h1v4" />
                                                                <path d="M4 10h2" />
                                                                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleBulletList().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('bulletList') }"
                                                            class="ql-list w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            value="bullet" type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <line x1="8" x2="21" y1="6" y2="6" />
                                                                <line x1="8" x2="21" y1="12" y2="12" />
                                                                <line x1="8" x2="21" y1="18" y2="18" />
                                                                <line x1="3" x2="3.01" y1="6" y2="6" />
                                                                <line x1="3" x2="3.01" y1="12" y2="12" />
                                                                <line x1="3" x2="3.01" y1="18" y2="18" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleBlockquote().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('blockquote') }"
                                                            class="ql-blockquote w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M17 6H3" />
                                                                <path d="M21 12H8" />
                                                                <path d="M21 18H8" />
                                                                <path d="M3 12v6" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="createCommentEditor?.chain().focus().toggleCode().run()"
                                                            :class="{ 'bg-gray-100': createCommentEditor.isActive('code') }"
                                                            class="ql-code w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="m18 16 4-4-4-4" />
                                                                <path d="m6 8-4 4 4 4" />
                                                                <path d="m14.5 4-5 16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </BubbleMenu>

                                                <EditorContent :editor="createCommentEditor" />

                                                <p
                                                    class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                                    {{ errorMessage }}</p>
                                            </Field>
                                        </div>

                                        <div class="mt-4">
                                            <button type="submit"
                                                class="float-right inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>

            <!-- Edit Modal -->
            <TransitionRoot appear :show="isOpenEditModal" as="template">
                <Dialog as="div" @close="closeEditModal" class="relative z-10">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black/25" />
                    </TransitionChild>

                    <div v-if="selectedItem" class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">

                                <DialogPanel
                                    class="dark:bg-slate-900 w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <DialogTitle as="h3"
                                        class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                        Edit Student Log Comment
                                    </DialogTitle>

                                    <Form v-slot="{ errors }" :validation-schema="logbookEdit" @submit="onEditSubmit"
                                        @invalid-submit="onInvalidEditSubmit">

                                        <div class="mt-6 grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label for="date"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>

                                                <input v-model="selectedItem.class_date" type="text" id="class-date"
                                                    name="class-date"
                                                    class="bg-gray-50 border focus:ring-1 focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                                    disabled>
                                            </div>

                                            <div>
                                                <label for="class"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>

                                                <input v-model="selectedItem.classes.title" type="text" id="class"
                                                    name="class"
                                                    class="bg-gray-50 border focus:ring-1 focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                                    disabled>
                                            </div>

                                            <div>
                                                <label for="name"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                <input v-model="selectedItem.coders.full_name" type="text" id="name"
                                                    name="name"
                                                    class="bg-gray-50 border focus:ring-1 focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                                    disabled>
                                            </div>

                                            <div>
                                                <label for="progress"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Progress</label>
                                                <input v-model="selectedItem.progress.title" type="text" id="progress"
                                                    name="progress"
                                                    class="bg-gray-50 border focus:ring-1 focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                                    disabled>
                                            </div>
                                        </div>

                                        <div>
                                            <label for="comment"
                                                class="mt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>

                                            <Field v-slot="{ field, errorMessage }" name="comment">
                                                <BubbleMenu
                                                    class="bg-white dark:bg-gray-700 rounded-xl border border-gray-200"
                                                    :editor="editCommentEditor" :tippy-options="{ duration: 100 }"
                                                    v-if="editCommentEditor">
                                                    <div class="flex align-middle gap-x-0.5 p-2">
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleBold().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('bold') }"
                                                            class="ql-bold w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M14 12a4 4 0 0 0 0-8H6v8" />
                                                                <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleItalic().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('italic') }"
                                                            class="ql-italic w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <line x1="19" x2="10" y1="4" y2="4" />
                                                                <line x1="14" x2="5" y1="20" y2="20" />
                                                                <line x1="15" x2="9" y1="4" y2="20" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleUnderline().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('italic') }"
                                                            class="ql-underline w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                                                                <line x1="4" x2="20" y1="20" y2="20" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleStrike().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('strike') }"
                                                            class="ql-strike w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M16 4H9a3 3 0 0 0-2.83 4" />
                                                                <path d="M14 12a4 4 0 0 1 0 8H6" />
                                                                <line x1="4" x2="20" y1="12" y2="12" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleOrderedList().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('orderedList') }"
                                                            class="ql-list w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            value="ordered" type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <line x1="10" x2="21" y1="6" y2="6" />
                                                                <line x1="10" x2="21" y1="12" y2="12" />
                                                                <line x1="10" x2="21" y1="18" y2="18" />
                                                                <path d="M4 6h1v4" />
                                                                <path d="M4 10h2" />
                                                                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleBulletList().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('bulletList') }"
                                                            class="ql-list w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            value="bullet" type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <line x1="8" x2="21" y1="6" y2="6" />
                                                                <line x1="8" x2="21" y1="12" y2="12" />
                                                                <line x1="8" x2="21" y1="18" y2="18" />
                                                                <line x1="3" x2="3.01" y1="6" y2="6" />
                                                                <line x1="3" x2="3.01" y1="12" y2="12" />
                                                                <line x1="3" x2="3.01" y1="18" y2="18" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleBlockquote().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('blockquote') }"
                                                            class="ql-blockquote w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="M17 6H3" />
                                                                <path d="M21 12H8" />
                                                                <path d="M21 18H8" />
                                                                <path d="M3 12v6" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            @click.prevent="editCommentEditor?.chain().focus().toggleCode().run()"
                                                            :class="{ 'bg-gray-100': editCommentEditor.isActive('code') }"
                                                            class="ql-code w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            type="button">
                                                            <svg class="flex-shrink-0 w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path d="m18 16 4-4-4-4" />
                                                                <path d="m6 8-4 4 4 4" />
                                                                <path d="m14.5 4-5 16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </BubbleMenu>

                                                <EditorContent :editor="editCommentEditor" />

                                                <p
                                                    class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                                    {{ errorMessage }}</p>
                                            </Field>
                                        </div>

                                        <div class="mt-4">
                                            <button type="submit" @keyup.enter="onEditSubmit"
                                                class="float-right inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>

            <!-- Delete Modal -->
            <TransitionRoot appear :show="isOpenDeleteModal" as="template">
                <Dialog as="div" @close="closeDeleteModal" class="relative z-10">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black/25" />
                    </TransitionChild>

                    <div v-if="selectedItem" class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">

                                <DialogPanel
                                    class="w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                        Delete Student Log Record
                                    </DialogTitle>

                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Are you sure you want to delete <strong>{{ selectedItem.coders.full_name
                                            }}</strong> logbook
                                            record?
                                        </p>
                                    </div>

                                    <div class="mt-4">
                                        <button type="submit" @click="onDeleteSubmit" @keyup.enter="onDeleteSubmit"
                                            class="float-right inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
                                            Submit
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </div>
        <!-- End Table Section -->
    </div>
</template>

<script lang="ts" setup>
import { notify } from "notiwind"
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import type { Header, Item, SortType } from "vue3-easy-data-table";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'

import { Form, Field } from "vee-validate";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

// Best practice: This will keep your app bundle size and routes to a minimum,
// ensuring faster load and interaction experiences for your users.
// Leverage yup's tree-shaking capabilities and only import what you need
// import * as Yup from "yup";
import { lazy, array, number, object, string } from "yup";
import { configure } from "vee-validate";

import StarterKit from '@tiptap/starter-kit'
import { useEditor, Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-3'
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Underline from "@tiptap/extension-underline"

// Configure vee-validate triggers
configure({
    validateOnBlur: false,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

const authStore = useAuthStore();

/* -------------------------------- Datatable ------------------------------- */

const sortBy: string[] = ["class_date", "classes.time", "coders.full_name"];
const sortType: SortType[] = ["desc", "desc", "asc"];

const headers: Header[] = [
    { text: "DATE", value: "class_date", sortable: true, width: 100 },
    { text: "CLASS", value: "classes.title", sortable: true, width: 20 },
    { text: "CODER NAME", value: "coders.full_name", sortable: true, width: 250 },
    { text: "PROGRESS", value: "progress.title", sortable: true, width: 200 },
    { text: "COMMENT", value: "comment", },
    { text: "ACTIONS", value: "action", width: 30 },
];

const searchField = ref("");
const searchValue = ref("");
const createComment = ref("");
const selectedItem = ref();

const editCommentEditor = useEditor({
    content: '',
    editorProps: {
        attributes: {
            class:
                "prose prose-sm focus:outline-none"
        }
    },
    extensions: [
        StarterKit,
        Underline,
        BulletList.configure({
            HTMLAttributes: {
                class: 'list-disc list-inside'
            },
        }),
        OrderedList.configure({
            HTMLAttributes: {
                class: 'list-decimal list-inside'
            },
        }),
    ],

    // triggered on every change
    onUpdate: ({ editor }) => {
        selectedItem.value.comment = editor.getHTML();
    },
});

const createCommentEditor = useEditor({
    content: '',
    editorProps: {
        attributes: {
            class:
                "prose prose-sm focus:outline-none"
        }
    },
    extensions: [
        StarterKit,
        Underline,
        BulletList.configure({
            HTMLAttributes: {
                class: 'list-disc list-inside'
            },
        }),
        OrderedList.configure({
            HTMLAttributes: {
                class: 'list-decimal list-inside'
            },
        }),
    ],
    // triggered on every change
    onUpdate: ({ editor }) => {
        createComment.value = editor.getHTML();
    },
});


/* --------------------------------- Modals --------------------------------- */

const isOpenCreateModal = ref(false)
const closeCreateModal = () => {
    isOpenCreateModal.value = false
    createComment.value = "";
}
const openCreateModal = () => {
    isOpenCreateModal.value = true
}

const isOpenEditModal = ref(false)
const closeEditModal = () => {
    isOpenEditModal.value = false
    selectedItem.value = null;
}
const openEditModal = (item: any) => {
    selectedItem.value = item;
    editCommentEditor?.value?.commands.setContent(selectedItem.value.comment)
    isOpenEditModal.value = true
}

const isOpenDeleteModal = ref(false)
const closeDeleteModal = () => {
    isOpenDeleteModal.value = false
    selectedItem.value = null;
}
const openDeleteModal = (item: any) => {
    selectedItem.value = item;
    isOpenDeleteModal.value = true
}

/* --------------------------- Data initialization -------------------------- */

const logbook = ref({
    date: array()
        .required()
        .label("Date"),
    class: lazy((value) =>
        typeof value === 'object'
            ? object().required().typeError('Required field').label("Class") // typeError is necessary here, otherwise we get a bad-looking yup error
            : string().required().label("Class")
    ),
    name: lazy((value) =>
        typeof value === 'object'
            ? object().required().typeError('Required field').label("Name") // typeError is necessary here, otherwise we get a bad-looking yup error
            : string().required().label("Name")
    ),
    progress: lazy((value) =>
        typeof value === 'object'
            ? object().required().typeError('Required field').label("Progress") // typeError is necessary here, otherwise we get a bad-looking yup error
            : string().required().label("Progress")
    ),
    comment: string()
        .label("Comment")
});

const logbookEdit = ref({
    comment: string()
        .label("Comment")
});

/* ------------------------ Form submission handling ------------------------ */

// Handle successful create form submission
const onCreateSubmit = async (values: any) => {
    const formResult = values

    // Initialise client
    const client = useSupabaseClient();
    // Initialise dayJS
    const dayjs = useDayjs();
    const authStore = useAuthStore();

    console.log({
        coder_id: formResult.name.id,
        class_id: formResult.class.id,
        progress_id: formResult.progress.id,
        class_date: dayjs(formResult.date[0]).format('YYYY-MM-DD'),
        comment: createComment.value,
        created_by: authStore.session.user.id,
    })

    const { error } = await client
        .from('logbook')
        .insert({
            coder_id: formResult.name.id,
            class_id: formResult.class.id,
            progress_id: formResult.progress.id,
            class_date: dayjs(formResult.date[0]).format('YYYY-MM-DD'),
            comment: createComment.value,
            created_by: authStore.session.user.id,
        })

    if (!error) {
        // Push notification
        notify({
            title: "Success",
            text: `${formResult.name.full_name} record logged successfully`,
            type: "success",
            group: "foo",
        }, 4000)

        closeCreateModal();

        const { data: data, error: error } = await client
            .from('logbook')
            .select(`
            id,
            classes (
            title,
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
        `)

        logbookData.value = data;
    } else {
        // Push notification
        notify({
            title: "Error",
            text: `Error submitting form. Please do not use Enter key in selecting dropdown options.`,
            type: "error",
            group: "foo",
        }, 4000)
    }
};

const onInvalidSubmit = ({ values, errors, results }: any) => {
    console.log(values); // current form values
    console.log(errors); // a map of field names and their first error message
    console.log(results); // a detailed map of field names and their validation results
};

// Handle successful edit form submission
const onEditSubmit = async (values: any) => {
    // Initialise client
    const client = useSupabaseClient();
    const authStore = useAuthStore();
    const dayjs = useDayjs();
    console.log(selectedItem.value.comment)
    console.log(selectedItem.value.id)

    const { error } = await client
        .from('logbook')
        .update({
            comment: selectedItem.value.comment,
            updated_by: authStore.session.user.id,
            updated_at: dayjs(new Date())
        })
        .eq('id', selectedItem.value.id)

    if (!error) {
        // Push notification
        notify({
            title: "Success",
            text: `${selectedItem.value.coders.full_name} record updated successfully`,
            type: "success",
            group: "foo",
        }, 4000)

        closeEditModal();

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
            class_date
        `)

        logbookData.value = data;
    } else {
        // Push notification
        notify({
            title: "Error",
            text: `Error submitting form.`,
            type: "error",
            group: "foo",
        }, 4000)
    }
};

const onInvalidEditSubmit = ({ values, errors, results }: any) => {
    console.log(values); // current form values
    console.log(errors); // a map of field names and their first error message
    console.log(results); // a detailed map of field names and their validation results
};

// Handle successful form submission
const onDeleteSubmit = async (values: any) => {
    // Initialise client
    const client = useSupabaseClient();
    const authStore = useAuthStore();

    const { error } = await client
        .from('logbook')
        .delete()
        .eq('id', selectedItem.value.id)

    if (!error) {
        // Push notification
        notify({
            title: "Success",
            text: `${selectedItem.value.coders.full_name} record deleted successfully`,
            type: "success",
            group: "foo",
        }, 4000)

        closeDeleteModal();

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
            class_date
        `)

        logbookData.value = data;
    } else {
        // Push notification
        notify({
            title: "Error",
            text: `Error deleting record.`,
            type: "error",
            group: "foo",
        }, 4000)
    }
};

/* --------------------------- Supabase API calls --------------------------- */

// Initialise client
const client = useSupabaseClient();

const { data: classesData, error: classesError } = await client
    .from('classes')
    .select()
const { data: namesData, error: namesError } = await client
    .from('coders')
    .select()
const { data: progressData, error: progressError } = await client
    .from('progress')
    .select()

const logbookData = ref();
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
  `)

logbookData.value = data;

let query = ref('')
let selectedClass = ref({ title: "Select class" })
let filteredClasses = computed(() =>
    query.value === ''
        ? classesData
        : classesData.filter((x) =>
            x.title
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

let selectedName = ref({ full_name: "Select name" })
let filteredNames = computed(() =>
    query.value === ''
        ? namesData
        : namesData.filter((x) =>
            x.full_name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

let selectedProgress = ref({ title: "Select progress" })
let filteredProgress = computed(() =>
    query.value === ''
        ? progressData
        : progressData.filter((x) =>
            x.title
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)
</script>

<style scoped>
ul {
    z-index: 999 !important;
}

.logbook-table {
    --easy-table-body-even-row-background-color: #f3f4f6;
}
</style>