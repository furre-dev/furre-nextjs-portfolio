import { GrClose } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
export default function MobileNavbar() {
	return (
		<div className="lg:hidden h-screen w-2/4 bg-black absolute top-0 right-0 z-[100]">
			<TiThMenu
				className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] m-3 ml-auto"
				color="white"
			/>
			<GrClose
				className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] m-3 ml-auto"
				color="white"
			/>
		</div>
	);
}
