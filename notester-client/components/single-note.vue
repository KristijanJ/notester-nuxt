<template>
    <div class="note-container">
        <div class="note-details">
            <input
                class="note-title"
                type="text"
                value="Work on the Notes Project"
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
    </div>
</template>

<script>
export default {
    name: 'SingleNote'
}
</script>
