import Machine from 'javascript-state-machine';
import QueryWrapper from '../query';
import { GET_LISTINGS } from '../../store/queries/listings';
// import { readable } from 'svelte/store';

const machine = new Machine({
    init: 'idle',
    transitions: [
        { name: 'loading', from: ['idle', 'error'], to: 'loading' },
        { name: 'idle', from: 'loading', to: 'idle' },
        { name: 'error', from: 'loading', to: 'error' }
    ]
})

// export const currentStage = readable(machine.state, (set) => {
//     machine.observe('onAfterTransition', () => {
//         set(machine.state); // question: can we remove this observer !?
//     })
// })

export class Query extends QueryWrapper {

    constructor() {
        super();
        this.getListings = this.getListings.bind(this);
        this.currentStage = readable(machine.state, (set) => {
            machine.observe('onAfterTransition', () => {
                set(machine.state)
            })
        })
    }

    // We can add something here to catch the changes!

    // Get listings
    // *
    async getListings() {
        machine.loading();
        return await this.client.query({
            query: GET_LISTINGS()
        }).then(response => {
            machine.idle()
            return this.res(response)
        }).catch(error => {
            machine.error()
            return this.res(error)
        })
    }

}