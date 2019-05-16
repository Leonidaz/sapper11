<script context="module">
    import client from '../../store/client';
    import { GET_LISTING } from '../../store/queries/listings';

    export async function preload({ query, params }) {
        return {
            id: params.id,
            cache: await client.query({ query: GET_LISTING(params.id) })
        }
    }
</script>

<script>
    import { restore, query } from 'svelte-apollo';
    export let id;
    export let cache;
    restore(client, GET_LISTING(id), cache.data);
    const listing = query(client, { query: GET_LISTING(id) })
</script>

<!-- Always subscribe. -->
{#await $listing}
    Loading listing..
    {:then result}
        <h1>{result.data.listing.address}</h1>
    {:catch error}
        Error: {error}
{/await}