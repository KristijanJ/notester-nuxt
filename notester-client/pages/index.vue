<template>
    <div class="note-container">
        <h1>Welcome</h1>
    </div>
</template>

<script>
definePageMeta({
  layout: 'default'
});

export default {

}
</script>

<style scoped>
.note-container {
    position: relative;
}
.note-container > h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>