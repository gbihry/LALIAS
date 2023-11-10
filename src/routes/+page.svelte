<script>
	import DATA from '$lib/DATA';
	import { PAGES } from '$lib/ROUTES';
</script>

<div class="container">
	<h1>CHOOSE YOUR SITUATION</h1>

	<div class="template">
		{#each Object.values(DATA.situations) as situation}
			<a href={PAGES.situations_situationName({ situationName: situation.nom })} class="card"
				>{situation.nom}</a
			>
		{/each}
	</div>
</div>
