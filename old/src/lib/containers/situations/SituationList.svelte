<script lang="ts">
	import { SITUATIONS } from '$lib/DATA';
	import { PAGES } from '$lib/ROUTES';
</script>

<div class="grid grid-cols-3 grid-rows-2 gap-4">
	{#each Object.entries(SITUATIONS) as [key, situation]}
		<a
			href={PAGES.situations_situationName({ situationName: key })}
			class="rounded-2xl bg-card p-4">{situation.nom}</a
		>
	{/each}
</div>
