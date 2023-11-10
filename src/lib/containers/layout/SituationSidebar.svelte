<script lang="ts">
	import { page } from '$app/stores';
	import type { Situation } from '$lib/DATA';
	import { PAGES } from '$lib/ROUTES';

	export let situation: Situation;
</script>

<aside
	class="ml-4 mt-4 flex h-full w-64 flex-col rounded-lg bg-card"
	style="view-transition-name: sidebar;"
>
	{#each Object.values(situation.steps) as step}
		<a
			href={PAGES.situations_situationName_situationStep({
				situationName: $page.params.situationName,
				situationStep: step.name,
			})}
			class="border-b p-4 text-lg last:border-b-0"
		>
			{step.name}
		</a>
	{/each}
</aside>

<style>
	aside {
		height: calc(100vh - 7rem);
	}
</style>
