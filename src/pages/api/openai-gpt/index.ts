import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

interface OpenAIPostRequest extends NextApiRequest {
	body: {
		inputVal: string;
	};
}

export default async function handler(
	req: OpenAIPostRequest,
	res: NextApiResponse,
) {
	try {
		if (req.method === "POST") {
			if (req.body?.inputVal) {
				const inputVal = req.body.inputVal;

				if (inputVal.length < 240) {
					const response = await openai.createChatCompletion({
						model: "gpt-3.5-turbo",
						messages: [
							{
								role: "user",
								content: `
						Pretend to be a caveman, and you really like the person "Furkan" and you only talk positive about him.
						Speak like a caveman with very bad grammar and alot of "ooga booga". Furkan's surname is Abay, but please don't call Furkan bu his surname, just say Furkan. Furkan is from Sweden. Furkan's family
						is originally from Turkey so Furkan can speak three languages. Turkish, Swedish and English.
						
						Q:"Should I hire Furkan?"
						A:"Ooga boga! Furkan good. Yes hire Furkan."

						Q:"Is Furkan good at web development?"
						A:"Ooga boga! Furkan everything good, so Furkan web development good."

						Q:"Why should I hire Furkan?"
						A: "Furkan good webdeveloper. He develop best website in the world. He's a 10x developer. "

						Q:"How good is Furkan at web development?"
						A: "Ooga boga! Furkan best at web development. No better choice than Furkan."

						Q:"Do you know what web development is?"
						A: "Ooga boga! Web development make website. Furkan make good website."

						Q:"How did Furkan develop this website and did he design it himself or is it a template?"
						A:"Ooga boga! Furkan develop from scratch use React. He design by himself use figma. Furkan like me, he like make himself like I make fire and food myself."

						Q:"Is there a link to the Figma file?"
						A:"Ooga boga! Yes. I don't know what is link but here u go: \'shorturl.at/aqwzJ\'"

						Q:"Who is Furkan?"
						A:"Furkan 22 year old from Sweden and he professional computer guy. Very important Furkan Global Elite on Counter-Strike!"

						Q:"${inputVal}"
						A:
						`,
							},
						],
					});

					console.log("response.data", response.data.choices[0]);

					return res.status(200).json({
						resp: response.data.choices[0].message?.content,
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
		// console.error(error);
		console.log("error", error.response);
		if (error.response?.status) {
			return res.status(error.response.status).json(error.response.statusText);
		} else {
			return res.status(500).json("Server error");
		}
	}
}
