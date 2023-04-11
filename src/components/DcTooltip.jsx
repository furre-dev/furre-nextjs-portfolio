import { motion as m, AnimatePresence, spring } from "framer-motion";
import { useState, useEffect } from "react";

export default function DcTooltip(props) {
	const func = props.func;
	const open = props.open;
	const close = props.close;
	const username = props.username;

	const dcNick = username;

	const [usernameToolTip, setUsernameToolTip] = useState(false);

	const [mousePos, setMousePos] = useState({});

	const handleMouseMove = (window) => {
		setMousePos({ x: window.event.clientX, y: window.event.clientY });
		console.log(mousePos);
	};

	return (
		<AnimatePresence>
			{func ? (
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, type: spring }}
					onMouseEnter={open}
					onMouseLeave={close}
					className="bg-white cursor-auto text-center p-3 rounded-2xl box-border absolute top-10 left-2/4 shadow-2xl -translate-x-2/4 w-[12rem]"
				>
					<div className="polygon bg-white absolute w-5 h-5 -top-3 left-2/4 -translate-x-2/4">
						{" "}
					</div>
					<p className="text-[#454555]">
						Current availability? Please refer to this{" "}
						<span className="text-[#5460E6]">Discord</span> status icon.
					</p>
					<div className="flex flex-col text-sm mt-2 font-display">
						<div className="relative">
							<m.p
								whileTap={{ scale: 0.9 }}
								className="mb-2 text-lg cursor-pointer"
								onMouseEnter={() => {
									setUsernameToolTip(true);
								}}
								onMouseLeave={() => setUsernameToolTip(false)}
								onMouseDown={() => {
									navigator.clipboard.writeText(dcNick);
									handleMouseMove(window);
								}}
							>
								<span title="Click to copy!" className="text-[#5460E6]">
									{dcNick}
								</span>
							</m.p>
							{/* <p className="absolute -top-2 left-2/4 -translate-x-2/4 text-xs">Click to copy!</p> */}
						</div>
						<p className="text-[#454555]">
							<span className="text-green-500">Green</span> is online.
						</p>
						<p className="text-[#454555]">
							<span className="text-[#9ca3af]">Gray</span> is offline.
						</p>
						<p className="text-[#454555]">
							<span className="text-orange-500">Orange</span> is away.
						</p>
					</div>
				</m.div>
			) : (
				""
			)}
		</AnimatePresence>
	);
}
