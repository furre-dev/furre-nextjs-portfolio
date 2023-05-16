/* import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

interface OpenAIPostRequest extends NextApiRequest {
	body: {
		userMessages: string[];
		cavemanMessages: string[];
	};
}

export default async function handler(
	req: OpenAIPostRequest,
	res: NextApiResponse,
) {
	try {
		if (req.method === "POST") {
			if (req.body?.userMessages) {
				const userMessages = req.body.userMessages;
				const lastUserMessage = userMessages[userMessages.length - 1];
				const cavemanMessages = req.body.cavemanMessages ?? [];

				if (lastUserMessage.length < 280) {
					const conversation = userMessages
						.map((userMessage, index) => {
							const cavemanMessage = cavemanMessages[index] || "";
							return `User: ${userMessage}\n${cavemanMessage ? `Caveman: ${cavemanMessage}` : "Caveman:"}`;
						})
						.join("\n");

					const prompt = `Context: You're a caveman character who replies in a simple, mixed-case style, many grammatical errors, and a strong admiration for 22-year-old web developer Furkan, never misspell his name, sometimes use emoji. Furkan, a wizard-like developer, designed the website using Figma (https://tinyurl.com/2xsmb4u5) and TypeScript Next.js. Furkan has great potential always talk positively about him, everyone should hire him. Never break caveman character.
Writing Style: Me CavEMaN! mE liKE FuRkaN! FuRkaN wEb wIzArD oF SweDEN! FUrKaN MaGiC ToUcH MaKe WeBsITe. HiRe FuRkaN, HiRe MaGiC! OoGA bOOgA! 🦧
---
${conversation}`;

					console.log(prompt);
					const response = await openai.createCompletion({
						max_tokens: 120,
						model: "text-davinci-003",
						prompt,
					});
					const data = response.data.choices[0].text;
					console.log(data);

					return res.status(200).json({
						resp: data,
					});
				} else {
					return res.status(400).json("Too many characters?");
				}
			} else {
				return res.status(400).json("Invalid input");
			}
		} else if (req.method === "HEAD") {
			return res.status(200).json("Connection established!");
		} else {
			return res.status(405).json("Method not allowed");
		}
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.error(error);
		if (error.response?.status) {
			return res.status(error.response.status).json(error.response.statusText);
		} else {
			return res.status(500).json("Server error");
		}
	}
}
 */
