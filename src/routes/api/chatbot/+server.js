import { env } from '$env/dynamic/private';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: env.VITE_OPENAI_API_KEY, organization: env.VITE_OPENAI_ORGANIZATION });
 
export async function POST({ request, cookies }) {
	const formData = await request.json();
	console.log(formData);
	const message = await formData.message;
	const conversationHistory = JSON.parse(formData.conversationHistory || '[]');
	try {
		const response = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [...conversationHistory, { role: 'user', content: message }]
		});
		
		console.log(response);
		const botResponse = response.choices[0].message.content;


		return new Response(JSON.stringify(botResponse))
	} catch (error) {
		console.error(error);
		return {
			success: false,
			error: 'Failed to connect to OpenAI'
		};
	}
}