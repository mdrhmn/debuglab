export const useAuthStore = defineStore("useAuthStore", {
    state: () => {
        return {
            // All these properties will have their type inferred automatically
            isLoggedIn: <boolean>false,
            session: <object>{},
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
