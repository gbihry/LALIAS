<script lang="ts">
    import {Situations} from '../../data.json';

    import { page } from '$app/stores';


    const sit = Situations[$page.params.nom as keyof typeof Situations];
</script>
<div class="flex">
    <div class="nav-left">
            {#each Object.values(sit.Etapes) as etape}
                <div class="etape">
                    <a href="/situations/{sit.nom}/{etape.name}">{etape.name}</a>
                </div>
            {/each}
    </div>
    <slot />
</div>


<style>
    .nav-left {
        background-color: white;
        width: 300px;
        height: 94vh;
    }

    .etape{
        margin: 0;
        padding: 20px 20px;
        font-weight: 900;
        font-size: 2rem;
        font-family: 'Poppins', sans-serif; 
        border-bottom: 2px solid #C7C7D1;
    }

    .etape a {
        color: black;
        text-decoration: none;
    }
</style>