import StateMachine from 'javascript-state-machine';

let lights = new StateMachine({
    init: 'green',
    transitions: [
        { name: 'change', from: 'green', to: 'yellow' },
        { name: 'change', from: 'yellow', to: 'red' },
        { name: 'change', from: 'red', to: 'green' }
    ],
    methods: {
        onYellow: function() { console.log(`I'm Yellow!`) },
        onRed: function() { console.log(`I'm Red!`) },
        onGreen: function() { console.log(`I'm Green`) }
    }
})

let listings = new StateMachine({
    init: 'loading',
    transitions: [
        { name: 'loading', from: '' }
    ]
})

export default lights;