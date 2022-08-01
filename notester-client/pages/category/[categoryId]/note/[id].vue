<template>
    <single-note />
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '../../../../store/main';

definePageMeta({
  layout: 'default'
});

export default {
    name: 'SingleNotePreview',
    computed: {
        ...mapStores(useMainStore)
    },
    mounted () {
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
</script>
