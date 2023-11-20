export type Categories = 'sveltekite' | 'svelte';

export type Post = {
	title: string;
	postTitle: string;
	description: string;
	date: string;
	categories: Categories;
	published: boolean;
};
