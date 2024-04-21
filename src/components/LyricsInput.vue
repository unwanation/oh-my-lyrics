<script setup lang="ts">
import store from '../store';

const submitLyrics = () => {
	store.setLyrics(
		(document.getElementById('lyrics-input') as HTMLTextAreaElement).value
	);
};
</script>

<template>
	<textarea
		class="lyrics-input"
		name="lyrics-input"
		id="lyrics-input"
		placeholder="Oh, My Lyrics..."
		required
	></textarea>
	<button @click="submitLyrics" class="lyrics-submit">Go</button>
</template>

<style lang="scss">
.lyrics-input {
	width: 60%;
	height: 60%;
	resize: none;
	background-color: var(--alt);
	border: 3px solid var(--bg);
	border-radius: 16px;
	padding: 1rem;
	scrollbar-width: none;
	transition: all 0.4s;

	&:focus {
		outline: none;
		filter: drop-shadow(0 0 0.5rem var(--accent));
	}
}

.lyrics-submit {
	width: 20%;
	background-color: var(--alt);
	border: none;
	border-radius: 16px;
	margin: 1.5rem;
	padding: 0.5rem;
	cursor: pointer;
	transition: all 0.4s;

	&:hover {
		filter: drop-shadow(0 0 0.25rem var(--accent));
	}
}
</style>
