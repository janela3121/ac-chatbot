<script>
	import { goto } from '$app/navigation';
	let username = '';
	let password = '';
	let error = '';

	const handleLogin = () => {
		const adminUser = 'admin';
		const adminPass = 'password123';

		if (username === adminUser && password === adminPass) {
			goto('/sverdle');
		} else {
			error = 'Invalid username or password';
		}
	};
</script>

<section class="bg-[#F1F5F8] dark:bg-darkbg flex flex-col items-center justify-center mt-[50%]">
	<div class="frosted-glass my-10 p-10 bg-white/30 border border-gray-200 rounded-lg shadow-lg w-[400px]">
		<h2 class="text-center text-lg font-bold mb-10">Administrator Login</h2>
		<form on:submit|preventDefault={handleLogin}>
		<div class="flex flex-col mb-4 w-full">
			<label for="username" class="mb-2 block text-gray-700 font-semibold">Username:</label>
			<input type="text" id="username" bind:value={username} class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
		</div>
		<div class="flex flex-col mb-8 w-full">
			<label for="password" class="mb-4 block text-gray-700 font-semibold">Password:</label>
			<input type="password" id="password" bind:value={password} class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
		</div>
		{#if error}
			<p id="error" class="text-red-500 mb-4">{error}</p>
		{/if}
		<button type="submit" class="w-full py-2 px-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
			Login
		</button>
		</form>
		<br />
	</div>
	<div class="text-center mt-5 font-bold">
		<a class="text-sky-600" href="/">Go to AC Chatbot</a>
	</div>
</section>