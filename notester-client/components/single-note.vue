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
    mounted () {
        this.setSelectedCategoryFromRoute();
        this.setSelectedNoteFromRoute();

        this.$nextTick(() => {
            if (this.mainStore.selectedNote) {
                this.scopedTitle = this.mainStore.selectedNote.title;
            }
        });
    },
    methods: {
        setSelectedCategoryFromRoute () {
            const routeCategoryId = parseInt(this.$route.params.categoryId);

            if (this.mainStore.selectedCategory && this.mainStore.selectedCategory.id === routeCategoryId) {
                return;
            }

            for (let i = 0; i < this.mainStore.categories.length; i++) {
                const category = this.mainStore.categories[i];
                if (category.id === routeCategoryId) {
                    this.mainStore.$patch({
                        selectedCategory: category
                    });
                    break;
                }
            }
        },
        setSelectedNoteFromRoute () {
            if (!this.mainStore.selectedCategory) {
                this.mainStore.$patch({
                    selectedNote: null
                });
                return;
            }
            const selectedNote = this.mainStore.selectedCategory.notes.find(note => note.id == this.$route.params.id);
            this.mainStore.$patch({
                selectedNote: selectedNote || null
            });
        }
    }
}
</script>
