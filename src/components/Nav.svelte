<script>
	export let segment;
</script>

<style lang="scss">
	nav {
		padding: 1rem;
		display: block;
		border-bottom: 1px solid #d8d8d8;
	}
	nav .image, nav .links {
		display: inline-block;
		vertical-align: middle;
	}
	nav .image img, nav .links img {
		width: 7.5rem;
	}
	nav .image a, nav .links a {
		text-decoration: none;
		margin-right: 1rem;
	}
	a.selected, nav .links a.selected {
		color: #00d7a0;
	}
	nav .image {
		padding-top: 0.5rem;
	}
	nav .links {
		margin-left: 1rem;
	}
</style>

<nav>
	<div class="image">
		<a href=".">
			<img alt="Triplemint logo" src="triplemint.svg" />
		</a>
	</div>
	<div class="links">
		<!-- We can add: "rel=prefetch" to a link if we want to refetch them. -->
		<a class='{segment === undefined ? "selected" : ""}' href=".">Home</a>
		<a class='{segment === "listings" ? "selected" : ""}' href="listings">Listings</a>
		<a class='{segment === "machine" ? "selected" : ""}' href="machine">Machine</a>
		<a class='{segment === "testing" ? "selected" : ""}' href="testing">Testing</a>
	</div>
</nav>