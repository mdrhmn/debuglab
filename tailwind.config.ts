import type { Config } from "tailwindcss";

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
    ],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [require("preline/plugin")],
};
