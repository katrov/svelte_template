<style>
	h1 {
		color: red;
	}
	.logo {
		height: 100px;
		width: 200px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>

<script lang="ts">
	type Name = string;
	export let name: Name = '';
	import logo from 'src/assets/svelte-logo-horizontal.svg';
	function dfsfds(value: string) {
		return console.log(value);
	}
</script>

<h1>
	Hello {name}!
</h1>
<div class="logo" style="background-image: url({logo});"></div>
<img src="{logo}" alt="Logo" />
