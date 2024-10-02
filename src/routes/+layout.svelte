<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="bg-[#F1F5F8] dark:bg-darkbg h-screen flex flex-col items-center justify-between">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy;&nbsp;Copyright 2024 People Dynamics Inc.</p>
	</footer>
</div>

<style>
	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	} */

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	/* footer a {
		font-weight: bold;
	} */

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
