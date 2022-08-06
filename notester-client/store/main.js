import { defineStore } from 'pinia';
import { getNoteFilters } from '../services/utils';

export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            categories: [],
            selectedCategory: null,
            selectedNote: null,
            selectedNoteFilter: getNoteFilters()[0]
        }
    }
})