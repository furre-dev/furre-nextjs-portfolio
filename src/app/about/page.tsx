"use client";

import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Link, { LinkProps } from "next/link";

export default function About() {
	useEffect(() => {
		document.body.style.background = "#EA3656";
		// rome-ignore lint/style/noNonNullAssertion: <explanation>
		const appClass: HTMLElement = document.querySelector(".app")!;
		appClass.style.overflowY = "visible";
		document.body.style.overflowY = "scroll";
	}, []);

	return (
		<main className="w-full lg:max-w-7xl pt-8 pb-10 md:pb-0 px-4 mx-auto overflow-scroll">
			<div className="flex justify-center items-center h-4/5">
				<div className="2xl:my-24 lg:my-0 w-full flex md:flex-row md:pb-0 pb-24 flex-col">
					<div className="left-side flex flex-col md:justify-around md:items-start justify-center items-center">
						<m.h1
							initial={{ y: "-900px" }}
							animate={{ y: 0 }}
							transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
							className="font-display font-black text-[#D9F0EE] 
        2xl:text-[15rem] 2xl:max-w-[100%] 2xl:leading-[79.5%]
        lg:text-[10rem] 
        md:text-left
        sm:text-[7rem]
        text-[6rem] text-center leading-[100%]
        "
						>
							About me.
						</m.h1>
						<m.a
							download
							href="/public/CV.pdf"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="bg-[#D9F0EE] py-5 w-[20rem] flex justify-center rounded-full text-[#EA3656] font-display font-black border-2 mt-5 lg:mt-10 hover:bg-transparent hover:text-[#D9F0EE] hover:scale-[1.02] hover:shadow-md transition-all duration-200"
						>
							Download CV!
						</m.a>
					</div>
					<div className="right-side  w-full flex  items-center font-display font-light md:pl-10 md:justify-between md:mt-0 justify-center mt-10">
						<m.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.8 }}
							className="w-[1px] rounded-full h-full bg-white"
						>
							{" "}
						</m.div>
						<m.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 1 }}
							className="text-center text-[#D9F0EE] max-w-[90%]"
						>
							Greetings! I'm Furkan, a gaming enthusiast hailing from the
							beautiful city of Stockholm, Sweden. Born on a sunny June day in
							2000, I grew up in Huddinge but recently took the plunge and moved
							to Haninge. <br />
							<br />
							My computer journey began in 2006 with Counter-Strike and since
							then, I've logged thousands of hours in front of the screen,
							honing my skills and exploring my creativity with programs like
							Photoshop, Figma, After Effects, and Cinema 4D. I dabbled in HTML
							and CSS out of sheer curiosity, but my passion for web development
							only truly sparked when my sister sent me a link to the Front-end
							Development program by Chasacademy. And now, here I am, fully
							immersed and loving every minute of it! <br />
							<br />
							If you need anything, don't hesitate to reach out - I'm always
							happy to chat. Have a fantastic day!
						</m.p>
					</div>
				</div>
			</div>
		</main>
	);
}
