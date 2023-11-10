<script>
	import '@kesval/design';
	import '$lib/styles/main.scss';
	import '../app.postcss';
	import { onNavigate } from '$app/navigation';
	import Header from '$lib/containers/layout/Header.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Header />

<slot />
