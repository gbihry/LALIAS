<script lang="ts">
    import { Situations } from "../../../data.json";
    import { _dictionary } from "../../../data.json";
    import autoAnimate from "@formkit/auto-animate";
    import { viewTransition } from "$lib/utils";

    import { page } from "$app/stores";

    const situtation = Situations[$page.params.nom as keyof typeof Situations];
    $: etape = situtation.Etapes[$page.params.etape as keyof typeof situtation.Etapes];

    let answers: string[] = [];
    let right: boolean | null = null;

    function handleClick(word: string) {
        if (answers.length < etape.answers.length) {
            answers = [...answers, word];
        }
    }

    function validate() {
        if (JSON.stringify(answers) == JSON.stringify(etape.answers)) {
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

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    $: shuffled = shuffle([...(etape?.words || []), ..._dictionary]);
</script>

<div class="container">
    <div
        class="main"
        style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url({etape.url_image}) no-repeat center center; background-size: cover;   "
    >
        <p>{etape.base_line}</p>
    </div>
    <div class="texte">
        {#each etape.blank_state as blank, i}
            <p>{blank}</p>
            {#if i != etape.blank_state.length - 1}
                <button
                    class="case"
                    on:click={() =>
                        answers[i] ? removeWord(answers[i]) : null}
                    style={answers[i]
                        ? `view-transition-name: ${answers[i]}`
                        : ""}
                >
                    {answers[i] || ""}
                </button>
            {/if}
        {/each}
    </div>
    <!--UTILISER IMPORTANT (MAIS CALM DOWN) MAIS C EST COOL-->
    <div class="words" use:autoAnimate>
        {#each shuffled as word (word)}
            {#if !answers.includes(word)}
                <button
                    on:click={() => handleClick(word)}
                    style="view-transition-name: {word}">{word}</button
                >
            {/if}
        {/each}
    </div>
    <button on:click={() => validate()}> Valider </button>
    {#if right === true}
        gg
    {:else if right === false}
        ratio
    {/if}
</div>

<style>
    p {
        font-family: "Poppins", sans-serif;
        margin: 0;
    }

    .container {
        width: 70%;
        margin: 20px;
    }

    .main {
        position: relative;
        width: 100%;
        height: 50%;
        background-size: cover;
        padding: 50px;
    }

    .main p {
        font-weight: 700;
        color: white;
        font-size: 2rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .texte {
        display: flex;
        gap: 10px;
    }

    .texte p {
        font-size: 2rem;
        font-weight: 900;
    }

    .case {
        background-color: grey;
        min-width: 100px;
        border-radius: 8px;
        font-size: 2rem;
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
</style>
