<script lang="ts">
	import * as config from '$lib/config';
	// Could refactor using text-transform: capitalize and by stripping '/' from start of routes
	const hrefLabels = ['About', 'Contact'];
</script>

<nav>
	<a href="/">
		<b>{config.title}</b>
	</a>
	<ul class="links">
		{#each ['/about', '/contact'] as href, i}
			<li>
				<a {href}>{hrefLabels[i]}</a>
			</li>
		{/each}
		<li>
			<a href="rss.xml" target="_blank">RSS</a>
		</li>
	</ul>
	<button>Toggle Theme</button>
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
