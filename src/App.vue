<script setup lang="ts">
import LyricsInput from './components/LyricsInput.vue';
import LyricsStream from './components/LyricsStream.vue';
import store from './store';
</script>

<template>
	<LyricsInput v-if="!store.lyrics" />
	<LyricsStream v-else />
</template>

<style scoped></style>
