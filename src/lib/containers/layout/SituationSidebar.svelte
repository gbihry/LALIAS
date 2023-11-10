<script lang="ts">
	import type { Situation } from '$lib/DATA';

	export let situation: Situation;
</script>

<aside>
	{#each Object.values(situation.steps) as step}
		<div>
			{step.name}
		</div>
	{/each}
</aside>
