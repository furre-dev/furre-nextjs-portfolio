import {useEffect} from "react";
import ProjectDiv from "@/components/ProjectDiv";
import { motion as m, spring, useScroll } from "framer-motion";
import { TfiMouse } from "react-icons/tfi";
import { AiOutlineArrowDown } from "react-icons/ai";
import HorizontalScroll from 'react-scroll-horizontal'
import Head from "next/head"
import Image from "next/image"


export default function Portfolio() {

  useEffect(() => {
    document.body.style.background = "#454555"
  },[])

	return (
	<>
		<Head>
			<title>Portfolio</title>
		</Head>
		<div className="portfolioCont flex w-screen h-screen absolute top-0 left-0 snap-x snap-proximity overflow-x-scroll overflow-y-hidden">
			<HorizontalScroll reverseScroll={true} animValues={30}>
				<div className="w-screen h-screen relative flex items-center justify-center snap-start flex-none">
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: .5 }}
						className="mouseFloat hidden md:flex space-y-1  flex-col items-center absolute top-2/4 -translate-y-2/4 right-10">
						<TfiMouse color="white" size="2rem" />
						<AiOutlineArrowDown color="white" size="1rem" />
					</m.div>
					<div className="flex flex-col items-center space-y-10 h-4/6">
						<m.h1
							initial={{ y: "-500px" }}
							animate={{ y: 0 }}
							transition={{
								delay: 0.4,
								duration: 0.7,
								type: "spring",
								bounce: 0.4,
							}}
							className="text-[#F1F8F7] font-outfit font-black max-w-[34rem] relative text-center
						2xl:text-8xl
						lg:text-8xl"
						>
							Portfolio & Projects!
							<span className="text-[#EA3656] -z-40 absolute top-[5px] left-[7px] ">
								Portfolio & Projects!
							</span>
						</m.h1>
						<m.p
							initial={{ opacity: 0, y: "-150px" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								delay: 1,
								duration: 0.7,
								type: "spring",
								bounce: 0.4,
							}}
							className="text-[#c5c5c5] font-light font-roboto max-w-[50rem] text-center
						lg:text-md"
						>
							Get ready to geek out! I'm a web wizard with a magic touch for
							crafting stunning, interactive experiences that leave users
							spellbound. While being a student at Chas Academy and spending countless
							hours at home making own projects, I've conjured up a portfolio of
							projects that are equal parts beautiful and functional. From concept
							to deployment, I pour my passion into every line of code and every
							pixel, turning complex problems into simple, elegant solutions.
							Let's turn your next big idea into a reality.
						</m.p>
					</div>
					<m.img
						initial={{ y: "400px" }}
						animate={{ y: "60px" }}
						transition={{
							delay: 0.7,
							duration: 0.7,
							type: "spring",
							bounce: 0.4,
						}}
						alt="Red waves on the bottom of the screen"
						src="/redWaves.svg"
						className="absolute left-0 bottom-0 w-screen"
					/>
				</div>
				<ProjectDiv />
				<ProjectDiv />
			</HorizontalScroll>
		</div>
	</>
	);
}
