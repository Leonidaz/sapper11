<script>
    // props
    export let onStageChange = () => {};
    
    import Machine from 'javascript-state-machine';
    import client from '../store/client';
    import { GET_LISTINGS } from '../store/queries/listings';
    import { onMount } from 'svelte';

    const listingsMachine = new Machine({
        init: 'loading',
        transitions: [
            { name: 'loading', from: ['loaded', 'error'], to: 'loading' },
            { name: 'loaded', from: 'loading', to: 'loaded' },
            { name: 'error', from: 'loading', to: 'error' }
        ],
        methods: {
            onLoaded: function() { console.log(`Content loaded!`) },
            onError: function() { console.log(`Error loading content!`) }
        }
    })

    let currentStage = listingsMachine.state;


    listingsMachine.observe('onAfterTransition', () => currentStage = listingsMachine.state);

    // export const getCurrentStage = () => listingsMachine.state;

    const getListings = () => {
        listingsMachine.loading()
        return async function() {
            await client.query({ query: GET_LISTINGS() })
                .then(response => {
                    listingsMachine.loaded()
                    console.log(response.data)
                    return response
                })
                .catch(error => {
                    listingsMachine.error()
                    console.log(error)
                    return error
                })
        }
    }

    listingsMachine.loaded();
</script>


<slot {currentStage}></slot>