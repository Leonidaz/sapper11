<script context="module">

    import { Query, currentStage } from '../state/machines/listings';
    import ListingCard from '../components/ListingCard.svelte';

    const query = new Query();
    export async function preload() {
        return {
            listings: await query.getListings()
        }
    }

</script>

<script>
    export let listings;
    let state;
    $: state = {
        loading: 'Loading..',
        idle: 'Loaded all content.',
        error: 'Error loading content.'
    }[$currentStage];
</script>

<style>
    .listings-container[data-state="loading"] {
        opacity: 0.2;
    }
</style>


<svelte:head>
	<title>Load more</title>
</svelte:head>

<button on:click={query.getListings}>Load more queries!</button>

<div class="listings-container" data-state={$currentStage}>
    {#each listings as listing}
        <ListingCard {listing} />
    {/each}
</div>