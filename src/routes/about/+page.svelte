<script>
	let name = '';
	let email = '';
	let message = '';
	let selectedTopic = '';
	let error = '';
	let isSubmitted = false;
	let userMessage = ''; 
	let conversationHistory = [];

	function handleSubmit() {
		if (selectedTopic === 'Other') {
			selectedTopic = message;
		}

		if (name != '' && email != '' && selectedTopic != '') {
			isSubmitted = true;
			// Add initial bot message
			conversationHistory = [...conversationHistory, {
				sender: 'bot',
				text: `Hi ${name}, thank you for contacting us about ${selectedTopic}. How can we assist you further?`
			}];
		} else {
			isSubmitted = false;
			error = 'Please complete the form before proceeding.';
		}
	}

	function sendMessage() {
		if (userMessage.trim() === '') return;

		conversationHistory = [...conversationHistory, {
			sender: 'user',
			text: userMessage
		}];

		userMessage = '';

		// Simulate a bot response
		setTimeout(() => {
			conversationHistory = [...conversationHistory, {
				sender: 'bot',
				text: "Thanks for your message. We're looking into it!"
			}];
		}, 1000);
	}

	function endChat() {
		const userConfirmed = confirm("Are you sure you want to end this session?");

		if (userConfirmed) {
			isSubmitted = false;
			conversationHistory = [];
			name = '';
			email = '';
			message = '';
			selectedTopic = '';
			error = '';
		}
	}
</script>

<svelte:head>
	<title>Chatbot Interface</title>
	<meta name="description" content="Chat with us using our chatbot!" />
</svelte:head>

<div class="mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
	<h1 class="text-3xl font-bold text-center mb-6">Chat with Us</h1>

	<!-- Form Section -->
	{#if !isSubmitted}
		<form on:submit|preventDefault={handleSubmit} class="mt-6">
			<div class="mb-4">
				<p class="block text-gray-700 font-semibold mb-2">Select a Topic:</p>
				<div class="flex flex-col space-y-2">
					<div>
						<input type="radio" id="products" name="topic" value="Products and Services" bind:group={selectedTopic} />
						<label for="products" class="ml-2">Products and Services</label>
					</div>
					<div>
						<input type="radio" id="test-inquiry" name="topic" value="Test-taking Inquiry" bind:group={selectedTopic} />
						<label for="test-inquiry" class="ml-2">Test-taking Inquiry</label>
					</div>
					<div>
						<input type="radio" id="seminars" name="topic" value="Public Seminars and Learning Events" bind:group={selectedTopic} />
						<label for="seminars" class="ml-2">Public Seminars and Learning Events</label>
					</div>
					<div>
						<input type="radio" id="emotional-intelligence" name="topic" value="Emotional Intelligence" bind:group={selectedTopic} />
						<label for="emotional-intelligence" class="ml-2">Emotional Intelligence</label>
					</div>
					<div>
						<input type="radio" id="other" name="topic" value="Other" bind:group={selectedTopic} />
						<label for="other" class="ml-2">Other</label>
					</div>
				</div>
			</div>

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

			{#if selectedTopic === 'Other'}
				<div class="mb-4">
					<label for="message" class="block text-gray-700 font-semibold">Your Message:</label>
					<textarea id="message" bind:value={message} rows="4" placeholder="Enter your message"
						class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
				</div>
			{/if}

			{#if error}
				<p id="error" class="text-red-500 mb-4">{error}</p>
			{/if}

			<button type="submit"
				class="w-full py-2 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
				Send Message
			</button>
		</form>
	{/if}

	<!-- Chat Conversation Section -->
	{#if isSubmitted}
		<div class="bg-white p-6 rounded-lg shadow-lg">
			<div class="flex justify-between items-center">
				<h2 class="text-xl font-bold">Chat with Us</h2>
				<button on:click={endChat} class="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">
					End Chat Session
				</button>
			</div>

			<div class="mb-4">
				<p><strong>Name:</strong> {name}</p>
				<p><strong>Email:</strong> {email}</p>
				<p><strong>Topic:</strong> {selectedTopic === 'Other' ? message : selectedTopic}</p>
			</div>

			<div id="chatbox" class="h-96 overflow-y-auto bg-gray-50 rounded-lg p-4 shadow-inner border border-gray-200">
				{#each conversationHistory as msg, i}
					{#if msg.sender === 'bot'}
						<div class="mb-4 flex">
							<div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
								🤖
							</div>
							<div class="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-md">
								<p>{msg.text}</p>
							</div>
						</div>
					{:else}
						<div class="mb-4 flex justify-end">
							<div class="bg-gray-300 p-3 rounded-lg shadow-md">
								<p>{msg.text}</p>
							</div>
							<div class="ml-3 w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center">
								👤
							</div>
						</div>
					{/if}
				{/each}
			</div>


			<div class="mt-6">
				<input type="text" bind:value={userMessage} placeholder="Type your message..."
					class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					on:keypress={event => {
						if (event.key === 'Enter') {
							event.preventDefault();
							sendMessage();
						}
					}}>
				<button class="mt-2 py-2 px-4 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg shadow-md"
					on:click={sendMessage}>Send</button>
			</div>
		</div>
	{/if}
</div>
