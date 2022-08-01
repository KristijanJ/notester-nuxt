<template>
    <div class="note-list-container">
        <div class="note-list">
            <div class="chosen-category">
                <p>Inbox</p>
            </div>

            <template v-if="mainStore.selectedCategory">
                <template v-for="note in mainStore.selectedCategory.notes" :key="note.id">
                    <NuxtLink :to="`/category/${mainStore.selectedCategory.id}/note/${note.id}`">
                        <single-note-card
                            :note="note"
                            :class="{ 'active': mainStore.selectedNote ? mainStore.selectedNote.id === note.id : false }"
                            @star-note="handleStarNote(note)"
                        />
                    </NuxtLink>
                </template>
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
                if (newCategories[i].id === this.mainStore.selectedCategory.id) {
                    for (let j = 0; j < newCategories[i].notes.length; j++) {
                        if (newCategories[i].notes[j].id === note.id) {
                            newCategories[i].notes[j].starred = !newCategories[i].notes[j].starred;
                            break;
                        }
                    }
                }
            }

            this.mainStore.$patch({ categories: newCategories })
        }
    }
}
</script>
