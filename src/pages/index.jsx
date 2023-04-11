import { motion as m } from "framer-motion";
import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		document.body.style.background = "#F1F8F7";
		document.body.style.overflowY = "hidden"
	}, []);
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className="flex justify-center items-center h-4/5 w-full">
				<div className="2xl:py-24 pb-20 relative w-full">
					<div className=" left-side 2xl:block  flex flex-col items-center lg:items-start lg:justify-center lg:max-w-[55%] ">
						<div className="texts space-y-1">
							<m.h2
								initial={{ x: "-1000px" }}
								animate={{ x: 0 }}
								transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
								className="md:max-w-[30rem] sm:max-w-[27rem] text-7xl 2xl:text-9xl lg:text-8xl font-outfit font-bold max-w-full  2xl:min-w-[50rem] lg:min-w-[36rem] text-[#EA3656] text-center lg:text-left lg:ml-[-6px]"
							>
								Hey! I'm Furkan Abay
							</m.h2>
							<m.p
								initial={{ x: "-1000px" }}
								animate={{ x: 0 }}
								transition={{ type: "spring", bounce: 0.4, delay: 0.3 }}
								className="text-2xl 2xl:text-3xl  font-roboto font-normal text-[#454555] text-center lg:text-left  "
							>
								Front-end developer.
							</m.p>
						</div>
						<div className="buttons pointer-events-auto flex 2xl:block mt-10 2xl:mt-24 space-x-2 2xl:space-x-6">
							<Link href={"/contact"}>
								<m.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}
									className="font-lato font-black text-md bg-[#EA3656] text-[#F1F8F7] w-40 2xl:w-56 h-12 rounded-2xl
          										hover:bg-[#bb2b45] transition-all duration-300"
								>
									Get in touch!
								</m.button>
							</Link>
							<Link href={"/portfolio"}>
								<m.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.7 }}
									className="font-lato font-black text-md w-40 2xl:w-48 h-12 rounded-2xl text-[#EA3656] border border-2 border-[#EA3656]
           										hover:text-[#ff5e7b] hover:border-[#ff5e7b] lg:hover:-translate-y-1 transition-all duration-300"
								>
									See my work!
								</m.button>
							</Link>
						</div>
						<m.img
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
							className="hidden pointer-events-none 2xl:block lg:block 2xl:w-[80rem] lg:w-[50rem] absolute top-[-3rem] 2xl:right-[-12rem] 2xl:top-[-13rem] lg:top-[-10rem] lg:right-[-8rem] mix-blend-darken -z-20"
							alt="Macbook Pro with Furkan's github on the screen"
							src="./macbookv3.png"
						/>
					</div>
					{/* <div className="2xl:mt-48 lg:mt-48 mt-16 md:flex md:justify-center">
        <div className=" lg:w-full md:w-96 w-[90%] lg:h-72 bg-[#EA3656]  
                          rounded-bl-[18rem] rounded-tr-3xl flex lg:flex-row flex-col items-center 
                          justify-around lg:px-28 pt-5 lg:pt-0 2xl:pt-5 pb-28 lg:pb-0 relative">

          <h2 className="font-outfit 2xl:text-left text-center text-4xl 2xl:text-7xl lg:text-5xl w-96 text-[#D9F0EE] mb-10">What can I offer?</h2>
          <div className="w-[1px] h-[50%] bg-[#D9F0EE] mx-16"> </div>
          <div className="flex lg:flex-row flex-col lg:space-x-10 2xl:space-x-24 space-y-10 lg:space-y-0">
            <Cards text={"Front-end development for web applications"} icon={"./white-pc-icon.png"} />
            <Cards text={"Front-end development for mobile applications"} icon={"./white-mobile-icon.png"} />
            <Cards text={"Simple UI/UX design for both web and mobile applications"} icon={"./white-program-icon.png"} />
          </div>
          <div className="lg:w-full w-[90%]  lg:h-72 h-[1050px] bg-[#454555] rounded-bl-[18rem] rounded-tr-3xl absolute lg:left-6 left-14 top-6 -z-10">

          </div>
        </div>
      </div> */}
				</div>
			</div>
		</>
	);
}
