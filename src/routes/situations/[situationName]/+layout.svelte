<script lang="ts">
	import { page } from '$app/stores';
	import { SITUATIONS } from '$lib/DATA';
	import SituationSidebar from '$lib/containers/layout/SituationSidebar.svelte';
	import { setSituation } from '$lib/utils/context';

	let situation = SITUATIONS[$page.params.situationName];
	$: situation = SITUATIONS[$page.params.situationName];

	setSituation(situation);
	$: setSituation(situation);
</script>

<div class="flex">
	<SituationSidebar {situation} />
	<slot />
</div>
