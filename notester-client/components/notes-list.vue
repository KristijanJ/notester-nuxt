<template>
    <div class="note-list-container">
        <div class="note-list">
            <div class="chosen-category">
                <p>Inbox</p>
            </div>

            <single-note-card
                v-for="note in mainStore.notesList"
                :key="note.id"
                :title="note.title"
                :content="note.content"
                :class="{ 'active': mainStore.selectedNote.id === note.id }"
            />
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
