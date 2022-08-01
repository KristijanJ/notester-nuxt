import { defineStore } from 'pinia';
import { getCategories } from '../services/dummyData';

export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            categories: getCategories(),
            selectedCategory: null,
            selectedNote: null
        }
    },
    getters: {
        getSelectedNote () {
            console.log(this)
        }
    }
})