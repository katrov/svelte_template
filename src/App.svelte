<script lang="ts">
	import { Router, Link, Route } from 'svelte-routing';
	import logo from 'src/assets/svelte-logo-horizontal.svg';
	import Home from 'src/pages/Home.svelte';
	import About from 'src/pages/About.svelte';
	import Error from 'src/pages/Error.svelte';
</script>

<Router>
	<main>
		<nav>
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
		</nav>
		<div>
			<Route path="about" component="{About}" />
			<Route path="/"><Home /></Route>
			<Route component="{Error}" />
		</div>
		<img src="{logo}" alt="svelte-logo" />
	</main>
</Router>
