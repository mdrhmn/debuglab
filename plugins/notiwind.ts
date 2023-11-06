// For Nuxt 3
import Notifications from "notiwind";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Notifications, []);
});
