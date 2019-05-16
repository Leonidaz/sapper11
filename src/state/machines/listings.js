import Machine from 'javascript-state-machine';
import { GET_LISTINGS } from '../../store/queries/listings';
import client from '../../store/client';
import { readable, writable } from 'svelte/store';

const machine = new Machine({
    init: 'idle',
    transitions: [
        { name: 'loading', from: ['idle', 'error'], to: 'loading' },
        { name: 'idle', from: 'loading', to: 'idle' },
        { name: 'error', from: 'loading', to: 'error' }
    ]
})

export const currentStage = readable(machine.state, (set) => {
    machine.observe('onAfterTransition', () => {
        set(machine.state)
    })
})


export const listings = writable([]);
console.log("inside listings.js");
export const getListings = async () => {
    console.log("getlistings ran");
    machine.loading()
    return await (
        client.query({ query: GET_LISTINGS() })
                .then(response => {
                    machine.idle();
                    listings.set(response.data.listings)
                    return response;
                })
                .catch(error => {
                    machine.error();
                    return error;
                })
    )

}
