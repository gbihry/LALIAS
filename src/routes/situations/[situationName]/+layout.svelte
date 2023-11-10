<script lang="ts">
	import { page } from '$app/stores';
	import DATA from '$lib/DATA';
	import SituationSidebar from '$lib/containers/layout/SituationSidebar.svelte';

	const situation = DATA.situations[$page.params.situationName];
</script>

<div class="flex">
	<SituationSidebar {situation} />
	<slot />
</div>
