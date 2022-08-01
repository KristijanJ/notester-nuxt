<template>
    <div class="note-container">
        <template v-if="mainStore.selectedNote">
            <div class="note-details">
                <input
                    v-model="scopedTitle"
                    class="note-title"
                    type="text"
                    placeholder="Untitled"
                />
                <div class="note-controls-icons">
                    <i class="fas fa-check"></i>
                    <i class="far fa-copy"></i>
                    <i class="fas fa-arrows-alt"></i>
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
            <div id="toolbar"></div>
            <div id="editor"></div>

            <div class="note-category">
                <div class="note-tag-icon">
                    <div class="green"></div>
                </div>
                <div class="note-tag-text">Inbox</div>
            </div>

            <div class="note-content">{{ mainStore.selectedNote.content }}</div>
        </template>

        <template v-else>
            <div class="empty-note">
                <h1>Add a new note</h1>
            </div>
        </template>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '../store/main';

export default {
    name: 'SingleNote',
    computed: {
        ...mapStores(useMainStore)
    },
    data () {
        return {
            scopedTitle: ''
        };
    },
    watch: {
        'mainStore.selectedNote': {
            immediate: true,
            handler (newValue, oldValue) {
                if (!newValue) {
                    this.scopedTitle = '';
                    return;
                }
                if (newValue !== oldValue) {
                    this.scopedTitle = newValue.title;
                }
            }
        }
    }
}
</script>
