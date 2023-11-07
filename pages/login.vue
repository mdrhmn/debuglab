<script setup lang="ts">
import { Form, Field } from "vee-validate";

// Best practice: This will keep your app bundle size and routes to a minimum,
// ensuring faster load and interaction experiences for your users.
// Leverage yup's tree-shaking capabilities and only import what you need
// import * as Yup from "yup";
import { string } from "yup";
import { notify } from "notiwind"

useHead({
    title: 'Login | Debug Lab'
})

definePageMeta({
    layout: "default",
});

const client = useSupabaseClient();
const user = useSupabaseUser();
const authStore = useAuthStore();
const loading = ref(false)

const credentials = ref({
    email: string()
        .email()
        .required()
        .label("Email address"),
    password: string()
        .required()
        .label("Password"),
});

const isError = ref({});

// Handle successful form submission
const onSubmit = async (values: any) => {
    loading.value = true
    const formResult = values

    const { data, error } = await client.auth.signInWithPassword({
        email: formResult.email,
        password: formResult.password,
    })

    if (!error) {
        loading.value = false;
        isError.value = {};

        const { data: { user } } = await client.auth.getUser();
        const { data: { session } } = await client.auth.getSession();
        authStore.$patch({ isLoggedIn: true, session: session });

        // Push notification
        notify({
            title: "Success",
            text: "Logged in successfully",
            type: "success",
            group: "foo",
        }, 4000)

        // Redirect
        await navigateTo('/');
    } else {
        loading.value = false
        isError.value = {
            status: error.status,
            message: error.message,
        };
    }
};

const onInvalidSubmit = ({ values, errors, results }: any) => {
    console.log(values); // current form values
    console.log(errors); // a map of field names and their first error message
    console.log(results); // a detailed map of field names and their validation results
};

watchEffect(async () => {
    if (user.value) {
        await navigateTo('/');
    }
});
</script>

<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <!-- <NuxtLink to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Debug Lab
                </NuxtLink> -->
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>

                        <div v-if="Object.keys(isError).length !== 0 && isError.constructor === Object"
                            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                            role="alert">
                            <span class="font-medium">{{ isError?.status }} Error!</span> {{ isError?.message }}
                        </div>

                        <Form v-slot="{ errors }" :validation-schema="credentials" @submit="onSubmit"
                            @invalid-submit="onInvalidSubmit" class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                    Address</label>
                                <Field v-slot="{ field, errorMessage }" name="email">
                                    <input v-bind="field" type="text" id="email" name="email"
                                        class="bg-gray-50 focus:ring-1 focus:outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        placeholder="abc@mail.com" required>

                                    <p
                                        class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                        {{ errorMessage }}</p>
                                </Field>
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <Field v-slot="{ field, errorMessage }" name="password">
                                    <input v-bind="field" type="password" id="password" name="password"
                                        class="bg-gray-50 focus:ring-1 focus:outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        placeholder="••••••••" required>

                                    <p
                                        class="flex items-center font-medium text-red-600 text-xs mt-1 ml-1 dark:text-red-500">
                                        {{ errorMessage }}</p>
                                </Field>
                            </div>
                            <button v-if="!loading" type="submit"
                                class="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Sign
                                in</button>

                            <button v-else disabled type="button"
                                class="w-full text-white bg-orange-400 dark:bg-orange-500 hover:bg-orange-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800">
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor" />
                                </svg>
                                Loading...
                            </button>

                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <NuxtLink to="register"
                                    class="font-medium text-orange-600 hover:underline dark:text-orange-500">Register
                                </NuxtLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>