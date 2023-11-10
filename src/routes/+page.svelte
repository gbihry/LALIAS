<script>
	import { SITUATIONS } from '$lib/DATA';
	import { PAGES } from '$lib/ROUTES';
</script>

<section class="container">
	<h1>CHOOSE YOUR SITUATION</h1>

	<div class="template">
		{#each Object.values(SITUATIONS) as situation}
			<a href={PAGES.situations_situationName({ situationName: situation.nom })} class="card"
				>{situation.nom}</a
			>
		{/each}
	</div>
</section>
