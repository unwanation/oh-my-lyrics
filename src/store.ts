import { reactive } from 'vue';

interface store {
	lyrics: string[] | null;
	line: number;
	setLyrics(lyrics: string): void;
}

const store: store = reactive({
	lyrics: null,
	line: 0,

	setLyrics(lyrics: string) {
		store.lyrics = lyrics.split('\n');
	},
});

export default store;
