<script>
    import { onMount } from 'svelte'
    import ListingCard from '../components/ListingCard.svelte';
    import { getListings, listings } from '../state/machines/listings'; 
    import client from '../store/client';
    import {get} from 'svelte/store';

    onMount(() => {
        console.log("store listings is:", get(listings));
    })

    export let cache;

    if(cache){
        listings.set($$props.cache.data.listings);
    }

</script>

<div class="listings-container">
    <button on:click={getListings}>Load more</button>
    {#each $listings as listing}
        <ListingCard {listing} />
    {/each} 
</div>