<script>
    import {Situations} from './data.json';


</script>

<div class="container">
    <h1>CHOOSE YOUR SITUATION</h1>

    <div class="template"> 
    {#each Object.values(Situations) as situation}
        {@const sit = situation.nom}
        <a href="situations/{sit}" class="card">{sit}</a>
    {/each}
    </div>
</div>


<style>
    .container {
        padding: 16px;
    }
    h1{
        font-weight: 900;
        font-size: 3rem;
    }

    .template {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: 2;
        grid-gap: 50px;
    }

    .card {
        width: 400px;
        height: 250px;
        border: 1px solid black;
        border-radius: 25px;
        background-image:linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(46,46,46,0) 100%), url("https://picsum.photos/500/300");
    }

    a.card {
        font-size: 2rem;
        padding: 20px;
        font-weight: 900; 
        text-decoration: none;
        color: black;
    }


</style>


