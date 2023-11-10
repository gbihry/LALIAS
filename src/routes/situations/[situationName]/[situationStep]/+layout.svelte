<script lang="ts">
	import { page } from '$app/stores';
	import { getSituation, setSituationStep } from '$lib/utils/context';

	const situation = getSituation();

	let step = situation.steps[$page.params.situationStep];
	$: step = situation.steps[$page.params.situationStep];

	setSituationStep(step);
	$: setSituationStep(step);
</script>

<slot />
