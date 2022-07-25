<template>
    <single-note />
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '../../store/main';

definePageMeta({
  layout: 'default'
});

export default {
    name: 'SingleNotePreview',
    computed: {
        ...mapStores(useMainStore)
    },
    mounted () {
        const selectedNote = this.mainStore.notesList.find(note => note.id == this.$route.params.id);
        this.mainStore.$patch({
            selectedNote
        });
    }
}
</script>
