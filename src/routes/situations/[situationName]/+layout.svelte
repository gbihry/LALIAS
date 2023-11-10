<script lang="ts">
	import { page } from '$app/stores';
	import { SITUATIONS } from '$lib/DATA';
	import SituationSidebar from '$lib/containers/layout/SituationSidebar.svelte';

	let situation = SITUATIONS[$page.params.situationName];
	$: situation = SITUATIONS[$page.params.situationName];
</script>

<div class="flex">
	<SituationSidebar {situation} />
	<slot />
</div>
