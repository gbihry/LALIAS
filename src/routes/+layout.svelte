<script>
	import '@kesval/design';
	import '$lib/styles/main.scss';
	import '../app.postcss';
	import { onNavigate } from '$app/navigation';

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

<header>
	<nav>
		<a href="/">LALIAS</a>
	</nav>
</header>

<slot />

<style>
	header {
		width: 100%;
		padding: 16px;
		box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.6);
		background-color: white;
		min-height: calc(6vh - 32px);
		display: flex;
		align-items: center;
	}
	a {
		font-family: 'Poppins', sans-serif;
		font-weight: 900;
		font-size: 2rem;
		color: black;
		text-decoration: none;
	}
</style>
