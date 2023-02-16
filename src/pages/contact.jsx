import { useEffect, useState } from "react";
import { BsTelephone, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";

import { motion as m } from "framer-motion";

export default function Contact() {
	const [transformPhone, setTransformPhone] = useState(false);
	const [transformEmail, setTransformEmail] = useState(false);

	const transformY = {
		transformvalue: {
			true: -50,
			false: 0,
		},
	};

	useEffect(() => {
		document.body.style.background = "#EA9FA0";
	}, []);

	return (
		<div className="flex flex-col items-center justify-center pt-10">
			<div className="space-y-8 flex flex-col">
				<h2 className="relative font-outfit font-black text-8xl text-[#F1F8F7]">
					Furkan Abay
					<span className="absolute top-[6px]  left-0 text-[#EA3656] -z-10 select-none">
						Furkan Abay
					</span>
				</h2>
				<div className="flex text-[1.3rem] text-[#F1F8F7] justify-around">
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						onClick={() => setTransformPhone(!transformPhone)}
						className="w-52 h-10 bg-[#EA3656] rounded-xl flex cursor-pointer overflow-hidden
						hover:bg-[#bb2b44] transition-colors duration-400"
					>
						<m.div
							animate={{
								y: transformY.transformvalue[transformPhone],
							}}
							className="relative m-auto"
						>
							<BsTelephone />
							<div className="translate-y-[40px]">
								<p className="absolute text-sm w-max top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
									+46 76 071 64 12
								</p>
							</div>
						</m.div>
					</div>
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						onClick={() => setTransformEmail(!transformEmail)}
						className="w-52 h-10 bg-[#EA3656] rounded-xl flex cursor-pointer overflow-hidden
						hover:bg-[#bb2b44] transition-colors duration-400"
					>
						<m.div
							animate={{
								y: transformY.transformvalue[transformEmail],
							}}
							className="relative m-auto"
						>
							<IoMailOutline />
							<div className="translate-y-[40px]">
								<p className="absolute text-sm w-max top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
									furkan_abay@hotmail.com
								</p>
							</div>
						</m.div>
					</div>
				</div>
				<div className="text-2xl text-[#F1F8F7] flex justify-around px-10">
					<m.a
						whileHover={{scale: 1.2, rotate: "5deg"}}
						transition={{duration: 0.4, type: "spring", bounce: .5}}
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/furkan-abay-04b33224b/"
						className="flex iconShadow bg-[#ea9fa062] w-10 aspect-square"
						type="button"
					>
						<BsLinkedin className="m-auto" />
					</m.a>
					<m.a
						whileHover={{scale: 1.2, rotate: "5deg"}}
						transition={{duration: 0.4, type: "spring", bounce: .5}}
						target="_blank"
						rel="noreferrer"
						href="https://github.com/furreabay"
						className="flex iconShadow bg-[#ea9fa062] w-10 aspect-square"
						type="button"
					>
						<BsGithub className="m-auto" />
					</m.a>
					<m.button
					whileHover={{scale: 1.2, rotate: "5deg"}}
					whileTap={{scale: 1}}
					transition={{duration: 0.4, type: "spring", bounce: .5}}
						className="iconShadow bg-[#ea9fa062] w-10 aspect-square"
						type="button"
					>
						<SiDiscord className="m-auto" />
					</m.button>
					<m.a
						whileHover={{scale: 1.2, rotate: "5deg"}}
						transition={{duration: 0.4, type: "spring", bounce: .5}}
						target="_blank"
						rel="noreferrer"
						href="https://instagram.com/furreabay"
						className="flex iconShadow bg-[#ea9fa062] w-10 aspect-square"
						type="button"
					>
						<BsInstagram className="m-auto" />
					</m.a>
				</div>
			</div>
			<img
				className="pointer-events-none -z-50 fixed -bottom-16 left-0 w-screen"
				alt="spiky gray waves for the background"
				src="./grayWaves.svg"
			/>
			<div className="h-[30rem] w-[25rem] rounded-t-3xl fixed bottom-0 left-2/4 -translate-x-2/4 bg-[#F1F8F7] fullShadow">
				<div className="h-1/6 flex justify-center items-center">
					<h2 className="font-outfit text-2xl">Get in touch.</h2>
				</div>
				<div className="h-5/6">
					<form
						className="flex flex-col w-3/4 mx-auto h-full space-y-6"
						action="https://formsubmit.co/furkan_abay@hotmail.com"
						method="POST"
					>
						<input
							className="px-1 font-outfit  h-9 outline-none border border-[#c4c4c4] bg-transparent rounded-lg text-black"
							type="text"
							name="name"
							placeholder="Full name"
							required
						/>
						<input
							className="px-1 font-outfit  h-9 outline-none border border-[#c4c4c4] bg-transparent rounded-lg text-black"
							type="email"
							name="email"
							placeholder="E-Mail"
							required
						/>
						<input type="hidden" name="_captcha" value="false" />
						<input
							type="hidden"
							name="_next"
							value="http://localhost:3000/contact"
						/>
						<textarea
							className="px-1 font-outfit  h-36 outline-none border border-[#c4c4c4] bg-transparent rounded-lg text-black"
							type="text"
							name="message"
							placeholder="Your message..."
							required
						/>
						<button
							className="bg-[#EA3656] w-max mx-auto px-10 py-2 rounded-xl text-[#F1F8F7] font-outfit font-black"
							type="submit"
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
