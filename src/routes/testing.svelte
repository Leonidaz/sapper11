<script context="module">
    import Test from '../components/Test.svelte';
    export async function preload() {
        return {
            value: 'Test Component',
            random: await import('../random.js')
        }
    }
</script>

<script>
    // export let value;
    // export let random;
    // console.log(random)
    console.log($$props);
</script>