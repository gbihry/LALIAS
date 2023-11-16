<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { goto } from '$app/navigation';

    function goHome() {
        goto('/');
    }

    function goRetry() {
        goto('./');
    }
</script>

<section class="m-4 mb-0 text-2xl w-full rounded-2xl bg-card p-4 justify-center flex-col gap-10 flex items-center">
    <h1>Congratulations on passing this module !</h1>
    <div class="flex flex-row gap-5">
        <Button on:click={() => goHome()}>Home</Button>
        <Button variant="destructive" class="text-white" on:click={() => goRetry()}>Retry</Button>
    </div>
    
</section>