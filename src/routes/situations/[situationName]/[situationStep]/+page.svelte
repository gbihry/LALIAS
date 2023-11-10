<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { goto } from '$app/navigation';

	import { getSituationStep } from '$lib/utils/context';
	import { DICTIONARY, SITUATIONS } from '$lib/DATA';

	const step = getSituationStep();

	let answers: string[] = [];
	let right: boolean | null = null;

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
		let currentEtape = step.name;
		//Transformer les étapes en tableau
		let etapes = Object.keys(SITUATIONS);
		//Récupérer l'index de notre étape actuel dans un tabkeau
		let currentIndex = etapes.indexOf(currentEtape);
		//Si une étape existe après celle ou l'on est
		if (etapes[currentIndex + 1]) {
			//Aller à l'étape actuel + 1
			resetAnswers();
			goto('./' + etapes[currentIndex + 1]);
		} else {
			//Sinon aller à l'accueil
			resetAnswers();
			goto('/');
		}
	}

	function resetAnswers() {
		answers = [];
		right = null;
	}

	$: shuffled = shuffle([...(step?.words || []), ...DICTIONARY]);
</script>

<div class="container">
	<div
		class="relative rounded-lg"
		style="background: url({step.url_image}) no-repeat center center; background-size: cover;"
	>
		<p>{step.base_line}</p>
	</div>
	<div class="flex flex-wrap items-center text-2xl">
		{#each step.blank_state as blank, i}
			<p class="">{blank}</p>
			{#if i != step.blank_state.length - 1}
				<button
					class="h-[1em] min-w-[5rem] rounded-lg bg-border"
					on:click={() => (answers[i] ? removeWord(answers[i]) : null)}
					style={answers[i] ? `view-transition-name: ${answers[i]}` : ''}
				>
					{answers[i] || ''}
				</button>
			{/if}
		{/each}
	</div>
	<!--UTILISER IMPORTANT (MAIS CALM DOWN) MAIS C EST COOL-->
	<div class="words" use:autoAnimate>
		{#each shuffled as word (word)}
			{#if !answers.includes(word)}
				<button on:click={() => handleClick(word)} style="view-transition-name: {word}"
					>{word}</button
				>
			{/if}
		{/each}
	</div>
	<div class="verif">
		<button class="btn verify" on:click={() => validate()}> Valider </button>
		{#if right === true}
			<div class="next">
				<button class="btn success" on:click={() => nextStage()}>Prochaine étape</button>
			</div>
		{:else if right === false}
			<div class="false">
				<button class="btn error" on:click={() => resetAnswers()}>Réssayer</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.main p {
		font-weight: 700;
		color: white;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.words {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.words button {
		cursor: pointer;
		margin: 0px;
		font-size: 1.5rem;
		font-weight: 900;
		padding: 5px;
		border-radius: 8px;
		background: radial-gradient(
				65.31% 70.71% at 50% 50%,
				rgba(89, 32, 223, 0.13) 0%,
				rgba(31, 11, 78, 0.17) 100%
			),
			var(--base-200, #e3e3e8);
	}

	.verif {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.btn {
		font-size: 1.5rem;
		cursor: pointer;
		padding: 6px 3px;
		border-radius: 5px;
		margin: 10px 0px;
	}

	.btn.verify {
		background-color: rgb(166, 166, 232);
	}

	.btn.success {
		background-color: rgb(166, 232, 173);
	}

	.btn.error {
		background-color: rgb(232, 166, 166);
	}
</style>
