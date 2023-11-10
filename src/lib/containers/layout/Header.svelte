<script>
	import { PAGES } from '$lib/ROUTES';
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<header class="flex h-16 items-center justify-between gap-4 bg-muted p-4" style="view-transition-name: header;">
	<div class="flex items-center gap-2">
		<a href={PAGES._ROOT()} class="font-title text-3xl"> LALIAS </a>
		<Badge>BETA</Badge>
	</div>
</header>
