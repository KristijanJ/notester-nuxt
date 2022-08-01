<template>
    <div class="note-card">
        <div class="note-card-title">
            <h3>{{ note.title }}</h3>
            <star-svg v-if="note.starred" fill="#ffd400" />
        </div>
        <p>
            {{ note.content }}
        </p>
    </div>
</template>

<script>
import starSvg from '../assets/svg-components/starSvg.vue';

export default {
    components: {
        starSvg
    },
    name: 'SingleNoteCard',
    props: {
        note: {
            type: Object,
            required: true
        }
    }
}
</script>
