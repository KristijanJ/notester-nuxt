<template>
    <div class="note-card">
        <div class="note-card-title">
            <h3>{{ title }}</h3>
            <star-svg v-if="isStarred" fill="#ffd400" />
        </div>
        <p>
            {{ content }}
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
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        isStarred: {
            type: Boolean,
            default: false
        }
    }
}
</script>
