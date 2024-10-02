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
	.frosted-glass {
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.2);
	}

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
