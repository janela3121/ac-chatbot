// import { env } from '$env/dynamic/private';
// import { OpenAI } from 'openai';

// const openai = new OpenAI({ apiKey: env.VITE_OPENAI_API_KEY, organization: env.OPENAI_ORGANIZATION });

// export const actions = {
// 	default: async ({ request }) => {
// 		const formData = await request.formData();
// 		const message = formData.get('message');
// 		const conversationHistory = JSON.parse(formData.get('conversationHistory') || '[]');

// 		try {
// 			const response = await openai.chat.completions.create({
// 				model: 'gpt-4o-mini',
// 				messages: [...conversationHistory, { role: 'user', content: message }]
// 			});

// 			const botResponse = response.data.choices[0].message.content;

//             console.log(response);

// 			return {
// 				success: true,
// 				botResponse
// 			};
// 		} catch (error) {
// 			console.error(error);
// 			return {
// 				success: false,
// 				error: 'Failed to connect to OpenAI'
// 			};
// 		}
// 	}
// };
