<!-- An example of how to use Svelte in markdown with mdsvex -->

<script lang="ts">
	let count = 0;
	const increment = () => count++;
</script>

<button on:click={increment}>Click Count: {count}</button>
