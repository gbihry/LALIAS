<script>
	import { PAGES } from '$lib/ROUTES';
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<header
	class="sticky top-4 z-50 mx-4 mb-4 flex h-16 items-center justify-between gap-4 rounded-2xl bg-card p-4 shadow-xl xl:mx-auto"
	style="view-transition-name: header;"
>
	<div class="flex items-center gap-2">
		<a href={PAGES._ROOT()} class="font-title text-3xl"> LALIAS </a>
		<Badge>BETA</Badge>
	</div>
</header>

<style>
	header {
		width: calc(100% - 2rem);
	}
</style>
