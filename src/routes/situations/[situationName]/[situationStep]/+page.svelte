<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { goto } from '$app/navigation';

	import { DICTIONARY, SITUATIONS } from '$lib/DATA';
	import { page } from '$app/stores';

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
					class="h-[1.5em] min-w-[5rem] rounded-lg border p-1 hover:bg-gray-200/80 transition-colors"
					on:click={() => (answers[i] ? removeWord(answers[i]) : null)}
				>
					{answers[i] || ''}
				</button>
			{/if}
		{/each}
	</div>
	<!--UTILISER IMPORTANT (MAIS CALM DOWN) MAIS C EST COOL-->
	<div class="mt-2 flex gap-2" use:autoAnimate>
		{#each shuffled as word (word)}
			{#if !answers.includes(word)}
				<button 
					class="p-1 min-w-[5rem] rounded-lg border hover:bg-gray-200/80 transition-colors"
					on:click={() => handleClick(word)}
				>
					{word}
				</button>
			{/if}
		{/each}
	</div>
	<div class="flex gap-3 mt-3">
		<button class="bg-primary transition-colors rounded-lg p-2 hover:bg-primary/80 border-transparent text-primary-foreground" on:click={() => validate()}> Validate </button>
		{#if right === true}
			<div class="next">
				<button class="bg-green-600 transition-colors rounded-lg p-2 hover:bg-green-600/80 border-transparent text-primary-foreground" on:click={() => nextStage()}>Next step</button>
			</div>
		{:else if right === false}
			<div class="false">
				<button class="bg-red-600 transition-colors rounded-lg p-2 hover:bg-red-600/80 border-transparent text-primary-foreground" on:click={() => resetAnswers()}>Retry</button>
			</div>
		{/if}
	</div>
</div>
