export const useDarkMode = defineStore("useDarkMode", {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            isDarkMode: <boolean>false,
        };
    },

    getters: {},
    actions: {},
    persist: true,
});

// Pinia supports Hot Module replacement so you can edit your stores and
// interact with them directly in your app without reloading the page,
// allowing you to keep the existing state, add, or even remove
// state, actions, and getters.

// Make sure to pass the right store definition
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
