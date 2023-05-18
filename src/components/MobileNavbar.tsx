import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState, useEffect } from "react";

export default function MobileNavbar({
	closeNavBar,
}: { closeNavBar: () => void }) {
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		console.log(isActive);

		if (!isActive) {
			timeoutId = setTimeout(() => {
				closeNavBar();
			}, 410); // Set the desired delay in milliseconds (e.g., 2000 for 2 seconds)
		}

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [isActive]);

	return (
		<AnimatePresence>
			{isActive && (
				<m.div
					key="mobileNavbarKey"
					initial={{ x: 230 }}
					animate={{ x: 30 }}
					transition={{ type: "spring", stiffness: 60 }}
					exit={{ x: 230 }}
					className="bg-[#ea3657e3] rounded-l-xl lg:hidden absolute pointer-events-auto  max-w-2/4 w-52 h-screen top-0 right-0 overflow-hidden"
				>
					<button
						className="ml-auto mt-2 mr-10 block"
						onClick={() => {
							setIsActive(false);
						}}
					>
						<IoCloseOutline size={"2rem"} color="#454555" />
					</button>
					<ul className="px-7 space-y-6">
						<m.li
							initial={{ x: 180 }}
							animate={{ x: 0 }}
							transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
						>
							<Link
								href={"/"}
								className="font-display text-[#F1F8F7] font-light text-3xl"
							>
								Home
							</Link>
						</m.li>
						<m.li
							initial={{ x: 180 }}
							animate={{ x: 0 }}
							transition={{ type: "spring", stiffness: 60, delay: 0.5 }}
						>
							<Link
								href={"/about"}
								className="font-display text-[#F1F8F7] font-light text-3xl"
							>
								About
							</Link>
						</m.li>
						<m.li
							initial={{ x: 180 }}
							animate={{ x: 0 }}
							transition={{ type: "spring", stiffness: 60, delay: 0.6 }}
						>
							<Link
								href={"/portfolio"}
								className="font-display text-[#F1F8F7] font-light text-3xl"
							>
								Portfolio
							</Link>
						</m.li>
						<m.li
							initial={{ x: 180 }}
							animate={{ x: 0 }}
							transition={{ type: "spring", stiffness: 60, delay: 0.7 }}
						>
							<Link
								href={"/contact"}
								className="font-display text-[#F1F8F7] font-light text-3xl"
							>
								Contact
							</Link>
						</m.li>
						<m.li
							initial={{ x: 180 }}
							animate={{ x: 0 }}
							transition={{ type: "spring", stiffness: 60, delay: 0.8 }}
						>
							<Link
								href={"https://github.com/furre-dev"}
								target="_blank"
								className="font-display text-[#F1F8F7] font-light text-3xl"
							>
								Github
							</Link>
						</m.li>
					</ul>
				</m.div>
			)}
		</AnimatePresence>
	);
}
