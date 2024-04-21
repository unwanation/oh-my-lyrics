<script setup lang="ts">
import store from '../store';

window.addEventListener('keydown', event => {
	if (event.key === 'Enter' && store.line < store.lyrics!.length - 1)
		store.line++;
});
</script>

<template>
	<div class="lyrics-stream">
		{{
			store.lyrics![store.line] +
			(store.lyrics![store.line].endsWith('!') ||
			store.lyrics![store.line].endsWith('?') ||
			store.lyrics![store.line].endsWith('.')
				? ''
				: '...')
		}}
	</div>
</template>

<style lang="scss">
@keyframes slide {
	from {
		opacity: 0;
		transform: translateX(-1rem);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.lyrics-stream {
	font-size: 5rem;
	font-weight: bolder;
	text-align: center;
	animation: slide 0.5s ease-in-out;
}
</style>
