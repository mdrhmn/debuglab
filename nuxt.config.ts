// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    modules: [
        // Auth and DB
        "@nuxtjs/supabase",

        // UI
        "nuxt-headlessui",
        "@nuxtjs/color-mode",

        // State Management
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",

        // Date Manipulation
        "dayjs-nuxt",
    ],

    css: [
        "~/assets/css/main.css",
        "@fortawesome/fontawesome-svg-core/styles.css",
    ],

    imports: {
        dirs: [
            "stores",
            // Scan top-level modules
            "composables",
            // ... or scan modules nested one level deep with a specific name and file extension
            "composables/*/index.{ts,js,mjs,mts}",
            // ... or scan all modules within given directory
            "composables/**",
        ],
    },

    app: {
        head: {
            title: "Debug Lab: Student Centre",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Debug Lab is a skill learning center for children aged 7-17 to come together to learn, train and master their skills in technology for better future.",
                },
                {
                    hid: "title",
                    name: "title",
                    content: `Debug Lab: Student Centre`,
                },
                {
                    // hid: 'author',
                    name: "author",
                    content: "Debug Lab",
                },
                {
                    // hid: "og:type",
                    property: "og:type",
                    content: "website",
                },
                {
                    hid: "og:url",
                    property: "og:url",
                    content: `https://debuglab.vercel.app`,
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: `Debug Lab: Student Centre`,
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content:
                        "Debug Lab is a skill learning center for children aged 7-17 to come together to learn, train and master their skills in technology for better future.",
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: `https://i.imgur.com/ni55bol.jpg`,
                },
                {
                    hid: "twitter:image",
                    property: "twitter:image",
                    content: `https://i.imgur.com/ni55bol.jpg`,
                },
                {
                    hid: "twitter:card",
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    hid: "twitter:url",
                    property: "twitter:url",
                    content: `https://debuglab.vercel.app`,
                },
                {
                    hid: "twitter:title",
                    property: "twitter:title",
                    content: `Debug Lab: Student Centre`,
                },
                {
                    hid: "twitter:description",
                    property: "twitter:description",
                    content:
                        "Debug Lab is a skill learning center for children aged 7-17 to come together to learn, train and master their skills in technology for better future.",
                },
            ],
            script: [
                {
                    src: "/preline.js",
                    tagPosition: "bodyClose",
                    defer: true,
                },
            ],
            link: [],
        },
        // global transition
        pageTransition: { name: "page", mode: "out-in" },
        layoutTransition: { name: "layout", mode: "out-in" },
    },

    nitro: {
        prerender: {
            routes: ["/", "/dass", "/login"],
        },
    },

    // Pinia
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
            "acceptHMRUpdate", // import { acceptHMRUpdate } from 'pinia'
        ],
    },

    // DayJS
    dayjs: {
        locales: ["en"],
        plugins: ["relativeTime", "utc", "timezone"],
        defaultLocale: "en",
        defaultTimezone: "Asia/Kuala_Lumpur",
    },

    // Tailwind CSS
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    // https://color-mode.nuxtjs.org/
    colorMode: {
        classSuffix: "",
    },

    // Supabase
    supabase: {
        // https://supabase.nuxtjs.org/get-started#redirectoptions
        redirectOptions: {
            login: "/login",
            callback: "/",
            exclude: ["/", "/register", "/credentials"],
        },
    },

    // Environment variables
    runtimeConfig: {
        // The private keys which are only available within server-side
        public: {
            baseURL: "",
        },
    },
});
