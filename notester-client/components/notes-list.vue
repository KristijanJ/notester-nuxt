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
    }
}
</script>
