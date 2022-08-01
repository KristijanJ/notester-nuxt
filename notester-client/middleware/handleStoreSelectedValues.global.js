import { useMainStore } from '../store/main'

export default defineNuxtRouteMiddleware((to, from) => {
    const mainStore = useMainStore();

    const categoryIdRoute = to.params.categoryId;
    const noteIdRoute = to.params.id;

    const selectedCategory = mainStore.categories.find(category => category.id == categoryIdRoute);
    mainStore.$patch({
        selectedCategory: selectedCategory || null
    });
    
    if (mainStore.selectedCategory) {
        const selectedNote = mainStore.selectedCategory.notes.find(note => note.id == noteIdRoute);
        mainStore.$patch({
            selectedNote: selectedNote || null
        });
    } else {
        mainStore.$patch({
            selectedNote: null
        });
    }
})