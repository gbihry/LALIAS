<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { goto } from '$app/navigation';

    import { SITUATIONS } from '$lib/DATA';
    import { page } from '$app/stores';
    
    let situation = SITUATIONS[$page.params.situationName];
	$: situation = SITUATIONS[$page.params.situationName];

    let step = situation.steps[$page.params.situationStep];
	$: step = situation.steps[$page.params.situationStep];

    $: actualSituation = $page.params.situationName;

    function start() {
        let etapes = Object.keys(situation.steps);
        console.log(etapes[0]);
        
        goto('./' + actualSituation + "/" + etapes[0]); 
    }

</script>

<section class="m-4 mb-0 text-2xl w-full rounded-2xl bg-card p-4 justify-center flex-col gap-10 flex items-center">
    <h1>You chose the next situation : {situation.nom}</h1>
    <Button on:click={() => start()}>Start game</Button>
    
</section>