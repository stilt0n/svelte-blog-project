/*
	This tells SvelteKit to crawl the links on the site and prerender the files at build time.
*/
export const prerender = true;

export const load = async ({ url }) => {
	return {
		url: url.pathname,
	};
};
