<template>
    <div class="note-card">
        <div class="note-card-title">
            <h3>{{ note.title }}</h3>
            <star-svg
                :fill="note.starred ? '#ffd400' : '#cccccc'"
                @click="$emit('star-note')"
            />
        </div>
        <p>
            {{ note.content }}
        </p>
    </div>
</template>

<script>
import starSvg from '../assets/svg-components/starSvg.vue';

export default {
    name: 'SingleNoteCard',
    components: {
        starSvg
    },
    emits: ['star-note'],
    props: {
        note: {
            type: Object,
            required: true
        }
    }
}
</script>
