import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default <Partial<Config>>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
        "node_modules/preline/dist/*.js",
        "node_modules/vue-tailwind-datepicker/**/*.js",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "vtd-primary": colors.sky, // Light mode Datepicker color
                "vtd-secondary": colors.gray, // Dark mode Datepicker color
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("flowbite/plugin"),
        require("preline/plugin"),
    ],
};
