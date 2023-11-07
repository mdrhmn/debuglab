import VueTailwindDatepicker from "vue-tailwind-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VueTailwindDatepicker", VueTailwindDatepicker);
});
