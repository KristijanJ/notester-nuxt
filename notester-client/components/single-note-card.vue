<template>
    <div class="note-card">
        <h3>{{ title }}</h3>
        <p>
            {{ content }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'SingleNoteCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    }
}
</script>
