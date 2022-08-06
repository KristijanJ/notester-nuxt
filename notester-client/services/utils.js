import { useMainStore } from '../store/main'

export const getNoteFilters = () => {
    return [
        {
            id: 'all',
            title: 'All notes',
            iconComponent: 'clipboard-svg'
        },
        {
            id: 'starred',
            title: 'Starred',
            iconComponent: 'star-svg'
        },
        {
            id: 'deleted',
            title: 'Deleted',
            iconComponent: 'trash-svg'
        }
    ]
};

export const setSelectedNoteAndCategoryFromRoute = (categoryIdRoute, noteIdRoute) => {
    const mainStore = useMainStore();

    const selectedCategory = mainStore.categories.find(category => category._id == categoryIdRoute);
    mainStore.$patch({
        selectedCategory: selectedCategory || null
    });
    
    if (mainStore.selectedCategory) {
        const selectedNote = mainStore.selectedCategory.notes.find(note => note._id == noteIdRoute);
        mainStore.$patch({
            selectedNote: selectedNote || null
        });
    } else {
        mainStore.$patch({
            selectedNote: null
        });
    }
};
