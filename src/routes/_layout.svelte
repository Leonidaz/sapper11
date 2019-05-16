<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>


<style>
	main {
		width: 100%;
		position: relative;
		background-color: white;
		padding: 1%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>