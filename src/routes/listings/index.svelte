<script context="module">

    import { getListings } from '../../state/machines/listings';
    // import { GET_LISTINGS } from '../../store/queries/listings';
    // import client from '../../store/client';
    // import ListingCard from '../../components/ListingCard.svelte';
    import Listings from '../../components/Listings.svelte';
    console.log(Listings);

    let isSSR = true;

    export async function preload() {
        // if(typeof window !== 'undefined'){
        //     isSSR = false;
        // }  
        return {
            cache: await getListings()
        }
    }

</script>

<script>
    // console.log(isSSR)
    export let cache;
    console.log(cache);
    // if(isSSR){
    //     listings.set($$props.cache.data.listings);
    // }
    //     $: console.log($currentStage);
    //     if($currentStage === "loading") {
    //         console.log($currentStage);
    //         alert(`ads`)
    //     }
    // listings.set(cache.data.listings);
    // import { restore, query } from 'svelte-apollo';
    // restore(client, GET_LISTINGS(), cache.data);
    // const listings = query(client, { query: GET_LISTINGS() })
    // let state;
    // $: state = {
    //     loading: 'Loading..',
    //     idle: 'Loaded all content.',
    //     error: 'Error loading content.'
    // }[$currentStage];
</script>

<!-- <style>
    .listings-container[data-state="loading"] {
        opacity: 0.2;
    }
</style> -->

<svelte:head>
	<title>Load more</title>
</svelte:head>

<Listings {cache} />

<!-- <div class="listings-container" data-state={$currentStage}>
    <button on:click={getListings}>Load more</button>
    {#if $currentStage === 'loading'}
        <h1>loading</h1>
    {:else}

        {#each $listings as listing}
            <ListingCard {listing} />
        {/each} 
    {/if}
</div> -->