<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { goto } from '$app/navigation';

	import { DICTIONARY, SITUATIONS } from '$lib/DATA';
	import { page } from '$app/stores';

	import { Button } from "$lib/components/ui/button";

	import party from "party-js";

	export let right: boolean | null = null;

	let situation = SITUATIONS[$page.params.situationName];
	$: situation = SITUATIONS[$page.params.situationName];

	let step = situation.steps[$page.params.situationStep];
	$: step = situation.steps[$page.params.situationStep];

	$: actualStep = $page.params.situationStep;

	let answers: string[] = [];
	

	function handleClick(word: string) {
		if (answers.length < step.answers.length) {
			answers = [...answers, word];
		}
	}

	function validate() {
		if (JSON.stringify(answers) == JSON.stringify(step.answers)) {
			right = true;
			party.confetti(document.body,{
				count: party.variation.range(40, 80),
			});
		} else {
			right = false;
		}
	}

	function removeWord(word: string) {
		answers = answers.filter((w) => w !== word);
	}

	function shuffle(array: Array<string>) {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex > 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	function nextStage() {
		//Récupérer le nom de l'étape actuel
		let currentEtape = actualStep;
		//Transformer les étapes en tableau
		let etapes = Object.keys(situation.steps);
		//Récupérer l'index de notre étape actuel dans un tabkeau
		let currentIndex = etapes.indexOf(currentEtape);
		
		if (etapes[currentIndex + 1]) {
			//Aller à l'étape actuel + 1
			resetAnswers();
			goto('./' + etapes[currentIndex + 1]);
		} else {
			//Sinon aller à l'accueil
			resetAnswers();
			goto('./success');
		}
	}

	function resetAnswers() {
		answers = [];
		right = null;
	}

	$: shuffled = shuffle([...(step?.words || []), ...DICTIONARY]);
	$: blankStates = step?.blank_state || [];
</script>

<div class="m-4 mb-0 w-full rounded-2xl bg-card p-4" style="view-transition-name: {step?.name};">
	<div
		class="relative h-96 rounded-lg"
		style="background: url({step.url_image}) no-repeat center center; background-size: cover;"
	>
		<p
			class="subtitle absolute bottom-2 left-2 right-2 mx-auto w-fit rounded-lg bg-card px-4 py-2 text-center font-title text-2xl"
		>
			{step.base_line}
		</p>
	</div>
	<div class="mt-2 flex flex-wrap items-center gap-2 text-2xl">
		{#each blankStates as blank, i}
			<p class="">{blank}</p>
			{#if i != blankStates.length - 1}
				<button
					class="h-[1.5em] min-w-[5rem] rounded-lg border p-1 hover:bg-gray-200/40 transition-colors"
					on:click={() => (answers[i] ? removeWord(answers[i]) : null)}
				>
					{answers[i] || ''}
				</button>
			{/if}
		{/each}
	</div>
	<!--UTILISER IMPORTANT (MAIS CALM DOWN) MAIS C EST COOL-->
	<div class="mt-2 flex gap-2 flex-wrap" use:autoAnimate>
		{#each shuffled as word (word)}
			{#if !answers.includes(word)}
				<Button 
				variant="outline" 
				class="hover:bg-white/90"
					on:click={() => handleClick(word)}
				>
					{word}
				</Button>
			{/if}
		{/each}
	</div>
	<div class="flex gap-3 mt-3">
		<Button on:click={() => validate()}> Validate </Button>
		{#if right === true}
			<div class="next">
				<Button class="bg-success hover:bg-success/90" on:click={() => nextStage()}>Next step</Button>
			</div>
		{:else if right === false}
			<div class="false">
				<Button variant="destructive" class="text-white" on:click={() => resetAnswers()}>Retry</Button>
			</div>
		{/if}
	</div>
</div>
