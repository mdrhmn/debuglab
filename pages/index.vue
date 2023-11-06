<script setup lang="ts">
import { Form, Field } from "vee-validate";

// Best practice: This will keep your app bundle size and routes to a minimum,
// ensuring faster load and interaction experiences for your users.
// Leverage yup's tree-shaking capabilities and only import what you need
// import * as Yup from "yup";
import { string } from "yup";
import { notify } from "notiwind"

const username = ref({
    username: string()
        .required()
        .label("Username"),
});


// Handle successful form submission
const onSubmit = async (values: any) => {
    const formResult = values
    const router = useRouter()
    router.push({ path: "/credentials", query: { username: formResult.username } })
};

const onInvalidSubmit = ({ values, errors, results }: any) => {
    console.log(values); // current form values
    console.log(errors); // a map of field names and their first error message
    console.log(results); // a detailed map of field names and their validation results
};

</script>

<style scoped></style>

<template>
    <div>
        <!-- Hero -->
        <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                <div class="text-center">
                    <h1 class="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
                        Hello, coders! 👋🏻
                    </h1>

                    <p class="mt-3 text-xl text-gray-600 dark:text-gray-400">
                        Please enter your username:
                    </p>

                    <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                        <!-- Form -->

                        <Form v-slot="{ errors }" :validation-schema="username" @submit="onSubmit"
                            @invalid-submit="onInvalidSubmit" class="space-y-4 md:space-y-6" action="#">
                            <div
                                class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                                <div class="flex-[1_0_0%]">
                                    <label for="hs-search-article-1"
                                        class="block text-sm text-gray-700 font-medium dark:text-white"><span
                                            class="sr-only">Username</span></label>

                                    <Field v-slot="{ field, errorMessage }" name="username">
                                        <input v-bind="field" type="text" id="username" name="username"
                                            class="p-3 block w-full border-transparent rounded-md focus:border-orange-500 focus:ring-orange-500 focus:ring-2 focus:outline-none dark:bg-gray-800 dark:text-gray-400"
                                            placeholder="Username" required>

                                        <p
                                            class="flex items-center font-medium text-red-600 text-xs pl-3 pt-1 dark:text-red-500">
                                            {{ errorMessage }}</p>
                                    </Field>
                                </div>

                                <div class="flex-[0_0_auto]">
                                    <button type="submit" class=" p-4 inline-flex justify-center items-center gap-2
                                        rounded-md border border-transparent font-semibold bg-orange-500 text-white
                                        hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500
                                        focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Form>
                        <!-- End Form -->

                        <!-- SVG Element -->
                        <div class="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                            <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor"
                                    stroke-width="10" stroke-linecap="round" />
                                <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor"
                                    stroke-width="10" stroke-linecap="round" />
                                <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor"
                                    stroke-width="10" stroke-linecap="round" />
                            </svg>
                        </div>
                        <!-- End SVG Element -->

                        <!-- SVG Element -->
                        <div class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
                            <svg class="w-40 h-auto text-orange-500" width="347" height="188" viewBox="0 0 347 188"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                    stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                            </svg>
                        </div>
                        <!-- End SVG Element -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Hero -->
    </div>
</template>