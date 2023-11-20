---
title: Second Post
description: Second Post.
date: '2023-11-19'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
  import Counter from './counter.svelte';
</script>

## Svelte
Media inside the **static** folder is served from `/`.

![Svelte](favicon.png)

## Importing Svelte Components into Markdown
Here we have a `counter` component:
```svelte
<script lang="ts">
	let count = 0;
	const increment = () => count++;
</script>

<button on:click={increment}>Click Count: {count}</button>
```
We can add it to our markdown file like this:
```svelte
<script>
  import Counter from './counter.svelte';
</script>
```
The result is below:
<Counter />

## Wrapping markdown
[You can also wrap markdown.](https://mdsvex.pngwn.io/docs#layout)