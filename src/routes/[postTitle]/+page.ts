import { error } from '@sveltejs/kit';

// params will be { pageTitle: string }
export const load = async ({ params }) => {
	try {
		const post = await import(`../../posts/${params.postTitle}.md`);
		return {
			content: post.default,
			meta: post.metadata,
		};
	} catch (e) {
		throw error(404, `Could not find ${params.postTitle}`);
	}
};
