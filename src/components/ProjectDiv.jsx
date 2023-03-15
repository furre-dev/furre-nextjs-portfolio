import { motion as m } from "framer-motion";

export default function ProjectDiv(props) {
	const index = props.index;
	const src = props.src;
	const title = props.title;
	const text = props.text;

	return (
		<div className="w-screen relative h-screen flex justify-center items-center flex-none snap-start overflow-hidden
			">
			<div className="w-[80%] mt-24  relative flex  
			lg:justify-end lg:items-center lg:h-max
			justify-center h-[70%]">
				<div className=" 
				lg:text-right lg:space-y-20 lg:pb-48
				text-center space-y-8">
					<div className="space-y-3 
					2xl:max-w-[40rem]
					lg:max-w-[30rem]">
						<h1 className="font-outfit font-black text-[#F1F8F7] relative
					2xl:text-7xl
					lg:text-5xl
					text-6xl">
							{title}
							<span className="w-full absolute left-0 -z-10 text-[#EA3656]
							lg:text-right lg:top-1
							text-center top-[2px]">
								{title}
							</span>
						</h1>
						<p className="text-[#c5c5c5] font-roboto font-light">
							{text}
						</p>
					</div>
					<div className="sm:space-x-10
					space-x-4">
						<button
							className="bg-[#EA3656] text-[#F1F8F7] rounded-2xl sm:w-36 w-28 h-10 text-xs font-outfit font-black
					hover:-translate-y-2 transition-all duration-400 ease-in-out
					hover:shadow-[rgba(0,_0,_0,_0.09)_0px_30px_40px_-7px]"
							type="button"
						>
							LIVE DEMO
						</button>
						<button
							className="bg-[#EA3656] text-[#F1F8F7] rounded-2xl sm:w-36 w-28 h-10 text-xs font-outfit font-black
					hover:-translate-y-2 transition-all duration-400 ease-in-out
					hover:shadow-[rgba(0,_0,_0,_0.09)_0px_30px_40px_-7px]"
							type="button"
						>
							SOURCE CODE
						</button>
					</div>
					<img
						className="absolute -z-10
						2xl:-top-72 2xl:w-[65rem] 2xl:-left-56
						lg:-top-52 lg:w-[45rem] lg:-left-36 lg:-translate-x-0
						md:top-40 md:left-2/4 md:-translate-x-2/4
						sm:top-56
						top-72 w-full"

						alt="Macbook mockup with preview of project"
						src={src}
					/>
				</div>
			</div >
			<img
				alt="Red waves on the bottom of the screen"
				src="/redWaves.svg"
				className="absolute left-0 bottom-[-60px] w-screen
				lg:block
				hidden"
			/>
		</div >
	);
}
