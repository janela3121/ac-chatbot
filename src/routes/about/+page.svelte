<svelte:head>
	<title>Chatbot Interface</title>
	<meta name="description" content="Chat with us using our chatbot!" />
</svelte:head>

<div class="max-w-4xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
	<h1 class="text-3xl font-bold text-center mb-6">Chat with Us</h1>
	
	<!-- Chatbot Messages Container -->
	<div id="chatbox" class="h-96 overflow-y-auto bg-white rounded-lg p-4 shadow-inner border border-gray-200">
		<!-- Bot greeting -->
		<div class="mb-4">
			<div class="flex items-start">
				<div class="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center">
					<!-- Bot avatar (could be a bot icon) -->
					🤖
				</div>
				<div class="ml-3 bg-green-700 text-white p-3 rounded-lg shadow-md">
					<p>Hello! How can we help you today?</p>
				</div>
			</div>
		</div>
		<!-- Example user message -->
		<div class="mb-4">
			<div class="flex justify-end">
				<div class="bg-gray-300 text-black p-3 rounded-lg shadow-md">
					<p>Hi, I have a question about your services.</p>
				</div>
			</div>
		</div>
	</div>

	<!-- User Input Form -->
	<form on:submit|preventDefault={handleSubmit} class="mt-6">
		<div class="mb-4">
			<label for="name" class="block text-gray-700 font-semibold">Your Name:</label>
			<input type="text" id="name" bind:value={name} placeholder="Enter your name"
				class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
		</div>

		<div class="mb-4">
			<label for="email" class="block text-gray-700 font-semibold">Your Email:</label>
			<input type="email" id="email" bind:value={email} placeholder="Enter your email"
				class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
		</div>

		<div class="mb-4">
			<label for="message" class="block text-gray-700 font-semibold">Your Message:</label>
			<textarea id="message" bind:value={message} rows="4" placeholder="Enter your message"
				class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
		</div>

		<button type="submit"
			class="w-full py-2 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
			Send Message
		</button>
	</form>
</div>

<script>
	let name = '';
	let email = '';
	let message = '';

	// Dummy handleSubmit function for now
	function handleSubmit() {
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Message:', message);
	}
</script>
