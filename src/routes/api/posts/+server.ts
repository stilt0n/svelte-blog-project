import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

const getPosts = async () => {
	const posts: Post[] = [];
	// Read about this in the vite documentation
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	for (const path in paths) {
		const file = paths[path];
		const postTitle = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && postTitle) {
			const metadata = file.metadata as Omit<Post, 'postTitle'>;
			const post = { ...metadata, postTitle } satisfies Post;
			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

	return posts;
};

export const GET = async () => {
	const posts = await getPosts();
	return json(posts);
};
