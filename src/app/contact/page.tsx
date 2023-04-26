"use client";

import { useEffect, useState } from "react";
import { BsTelephone, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

import { motion as m } from "framer-motion";
import ContactForm from "src/components/ContactForm";

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
		/* document.body.style.background = "#E29899"; */
		document.body.style.background = "#B39CD0";
		document.body.style.overflowY = "hidden";
	}, []);

	return (
		<>
			<main className="w-full lg:max-w-7xl px-4 mx-auto">
				<div className="flex flex-col items-center justify-center 2xl:pt-10">
					<div className="space-y-8 flex flex-col">
						<m.h2
							initial={{ x: "1600px" }}
							animate={{ x: "0px" }}
							transition={{
								delay: 0.3,
								duration: 0.7,
								type: "spring",
								bounce: 0.4,
							}}
							className="relative font-display font-black text-8xl text-[#F1F8F7]"
						>
							Furkan Abay
							<span className="absolute top-[6px]  left-0 text-[#EA3656] -z-10 select-none">
								Furkan Abay
							</span>
						</m.h2>
						<div className="flex text-[1.3rem] text-[#F1F8F7] justify-around">
							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<m.div
								initial={{ x: "-1500px" }}
								animate={{ x: "0px" }}
								transition={{
									delay: 0.6,
									duration: 0.7,
									type: "spring",
									bounce: 0.2,
								}}
								onClick={() => setTransformPhone(!transformPhone)}
								className="w-52 h-10 bg-[#EA3656] rounded-xl flex cursor-pointer overflow-hidden
						hover:bg-[#bb2b44] transition-colors duration-400"
							>
								<m.div
									animate={{
										// @ts-ignore
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
							</m.div>
							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<m.div
								initial={{ x: "1500px" }}
								animate={{ x: "0px" }}
								transition={{
									delay: 0.6,
									duration: 0.7,
									type: "spring",
									bounce: 0.2,
								}}
								onClick={() => setTransformEmail(!transformEmail)}
								className="w-52 h-10 bg-[#EA3656] rounded-xl flex cursor-pointer overflow-hidden
						hover:bg-[#bb2b44] transition-colors duration-400"
							>
								<m.div
									animate={{
										// @ts-ignore
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
							</m.div>
						</div>
						<m.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1 }}
							className="text-2xl text-[#F1F8F7] flex justify-around px-10"
						>
							<m.a
								whileHover={{ scale: 1.2, rotate: "5deg" }}
								transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/furkan-abay-04b33224b/"
								className="flex iconShadow bg-[#ea9fa02e] w-10 aspect-square"
								type="button"
							>
								<BsLinkedin className="m-auto" />
							</m.a>
							<m.a
								whileHover={{ scale: 1.2, rotate: "5deg" }}
								transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
								target="_blank"
								rel="noreferrer"
								href="https://github.com/furreabay"
								className="flex iconShadow bg-[#ea9fa02e] w-10 aspect-square"
								type="button"
							>
								<BsGithub className="m-auto" />
							</m.a>
							<m.a
								whileHover={{ scale: 1.2, rotate: "5deg" }}
								transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
								target="_blank"
								rel="noreferrer"
								href="https://instagram.com/furreabay"
								className="flex iconShadow bg-[#ea9fa02e] w-10 aspect-square"
								type="button"
							>
								<BsInstagram className="m-auto" />
							</m.a>
						</m.div>
					</div>
					<m.img
						initial={{ y: "600px" }}
						animate={{ y: "60px" }}
						transition={{
							delay: 0.7,
							duration: 0.7,
							type: "spring",
							bounce: 0.4,
						}}
						className="pointer-events-none -z-50 fixed -bottom-16 left-0 w-screen"
						alt="spiky gray waves for the background"
						src="./grayWaves.svg"
					/>
					<ContactForm />
				</div>
			</main>
		</>
	);
}
