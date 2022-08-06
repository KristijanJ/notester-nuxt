<template>
    <div class="note-list-container">
        <div class="note-list">
            <div class="chosen-category">
                <p>Inbox</p>
            </div>

            <template v-if="mainStore.selectedCategory">
                <div v-for="note in mainStore.selectedCategory.notes" :key="note._id">
                    <NuxtLink
                        :to="`/category/${mainStore.selectedCategory._id}/note/${note._id}`"
                        v-if="displayNoteInUI(note)"
                    >
                        <single-note-card
                            :note="note"
                            :class="{ 'active': mainStore.selectedNote ? mainStore.selectedNote._id === note._id : false }"
                            @star-note="handleStarNote(note)"
                        />
                    </NuxtLink>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '../store/main';
import SingleNoteCard from './single-note-card.vue';

export default {
    name: 'NotesList',
    components: {
        SingleNoteCard
    },
    computed: {
        ...mapStores(useMainStore)
    },
    methods: {
        handleStarNote (note) {
            const newCategories = [...this.mainStore.categories];
            for (let i = 0; i < newCategories.length; i++) {
                if (newCategories[i].id === this.mainStore.selectedCategory._id) {
                    for (let j = 0; j < newCategories[i].notes.length; j++) {
                        if (newCategories[i].notes[j].id === note._id) {
                            newCategories[i].notes[j].starred = !newCategories[i].notes[j].starred;
                            break;
                        }
                    }
                }
            }

            this.mainStore.$patch({ categories: newCategories })
        },
        displayNoteInUI (note) {
            if (this.mainStore.selectedNoteFilter.id === 'starred') {
                return note.starred;
            }
            return true;
        }
    }
}
</script>
