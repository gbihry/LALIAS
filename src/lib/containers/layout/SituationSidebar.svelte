<script lang="ts">
	import { page } from '$app/stores';
	import type { Situation } from '$lib/DATA';
	import { PAGES } from '$lib/ROUTES';

	export let situation: Situation;

	$: actualStep = $page.params.situationStep
	
</script>

<aside
	class="ml-4 mt-4 flex h-full w-64 flex-col rounded-2xl bg-card"
	style="view-transition-name: sidebar;"
>
	{#each Object.entries(situation.steps) as [key, step]}

		{#if key == actualStep}
			<a
				href={PAGES.situations_situationName_situationStep({
					situationName: $page.params.situationName,
					situationStep: key,
				})}
				
				class="border-b p-4 text-white text-lg font-bold last:border-b-0 bg-primary"
			>
				{step.name}
			</a>
		{:else}
			<a
				href={PAGES.situations_situationName_situationStep({
					situationName: $page.params.situationName,
					situationStep: key,
				})}
				
				class="border-b p-4 text-lg font-bold last:border-b-0"
			>
				{step.name}
			</a>
		{/if}
	{/each}
</aside>

<style>
	aside {
		height: calc(100vh - 7rem);
	}
</style>
