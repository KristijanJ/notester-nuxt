import { defineStore } from 'pinia';
import { getNoteFilters } from '../services/utils';
import { getCategories } from '../services/dummyData';

export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            categories: getCategories(),
            selectedCategory: null,
            selectedNote: null,
            selectedNoteFilter: getNoteFilters()[0]
        }
    }
})