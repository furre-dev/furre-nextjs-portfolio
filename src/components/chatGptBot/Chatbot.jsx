"use client"

import { useState, useEffect, useRef } from "react";
import { BiSend } from "react-icons/bi";
import RecievedMsg from "./RecievedMsg";
import SentMsg from "./SentMsg";
import ChatBox from "./ChatBox";
import { IoMdRadioButtonOn } from "react-icons/io";
import { motion as m, spring } from "framer-motion";
import { render } from "react-dom";

function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16),
	);
}

const cavemanPic =
	"https://media.discordapp.net/ephemeral-attachments/1008571040097632317/1072958691466289204/grid_0.webp?width=676&height=676";

export default function Chatbot(props) {
	const [apiResponse, setApiResponse] = useState(false);
	const [chatOpen, setChatOpen] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("http://localhost:5000/api", {
					method: "HEAD",
				});

				if (response.ok) {
					setApiResponse(true);
				} else {
					setApiResponse(false);
				}
			} catch (error) {
				console.error(error);
				setApiResponse(false);
			}
		}

		fetchData();
	}, []);

	const [inputVal, setInputVal] = useState();
	const [resMessage, setResMessage] = useState();
	const [resArr, setResArr] = useState([]);
	const [sentArr, setSentArr] = useState([]);

	const [clicked, setClicked] = useState(false);
	const [toggleDirection, setToggleDirection] = useState("-4%");

	useEffect(() => {
		setChatOpen(!chatOpen);
		console.log(chatOpen);
	}, [clicked]);

	useEffect(() => {
		{
			chatOpen ? setToggleDirection("87%") : setToggleDirection("-4%");
		}
		console.log(toggleDirection);
	}, [chatOpen]);

	const colorPalette = {
		colors: {
			red: "#dc2626",
		},
	};

	const lastMsg = useRef(null);

	const executeScroll = () =>
		lastMsg.current.scrollIntoView({ behavior: "smooth" });

	useEffect(() => {
		if (lastMsg.current !== null) {
			executeScroll();
			console.log("ebem");
		}
	}, [sentArr, resArr]);

	function handleChange(e) {
		setInputVal(e.target.value);
	}

	function handleAdd(inputVal) {
		setInputVal("");

		const newSentArr = [...sentArr];
		newSentArr.push(inputVal);
		setSentArr(newSentArr);
		(async () => {
			try {
				const res = await fetch("http://localhost:5000/api", {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({ inputVal }),
				});
				const data = await res.json();
                const message = data.resp.replace(/"/g, "");
                setResArr([...resArr, message]);
                console.log(resMessage);
			} catch (error) {
				console.log(error);
				setApiResponse(false);
                setSentArr([])
                setResArr([])
                setInputVal("");
			}
		})();
	}

	let num = 0;
	return (
		<m.div
			animate={{
				translateY: toggleDirection,
			}}
			className="container max-w-max fixed bottom-0 right-10 point z-40"
		>
			<div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-gray-200 w-72 h-96 rounded-xl overflow-hidden">
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					onClick={() => setClicked(!clicked)}
					className="cursor-pointer topbar w-full h-[13%] bg-[#EA3656] hover:bg-[#b3344b] transition-colors duration-300 
                        flex px-3 items-center overflow-hidden space-x-3"
				>
					{/* <div className="w-9 rounded-full overflow-hidden">
                        <img alt="caveman illustration" src="/botProfilePic.png" className="scale-150" />
                        </div> */}
					<div className="flex items-center justify-between w-full">
						<h1 className="text-white text-lg font-sans font-bold">Caveman</h1>
						<IoMdRadioButtonOn
							className="self-end -translate-y-1.5"
							size={"1rem"}
							color={apiResponse ? "green" : "#262432"}
						/>
					</div>
				</div>
				<div className="chatBox pb-2 flex flex-col w-full px-3 m-auto h-[75%] overflow-y-auto overflow-x-hidden border-b-2 border-gray-300">
					<div className=" w-full text-center">
						{resArr.length > 3 ? (
							<p className="text-xs text-gray-500">Beginning of conversation</p>
						) : (
							""
						)}
					</div>
					{sentArr.length === 0 && apiResponse ? (
						<div className="h-full w-full flex flex-col text-center justify-center items-center">
							<h2 className="font-semibold text-red-500">Ask me anything!</h2>
							<p className="text-xs text-gray-400">
								Examples:
								<br /> "How did Furkan develop this website?"
								<br />
								<br /> "Why should I hire Furkan?" ,<br />
								<br /> "Do you have a link to the figma design page for this
								website?",
								<br />
								<br />
								Can Furkan "ANY SUPER POWER" (fly, cure cancer, become
								invisible)
							</p>
						</div>
					) : (
						<div className="h-full w-full flex flex-col text-center justify-center items-center">
							{!apiResponse ? (
								<h2 className="font-semibold text-gray-500">
									I'm very sorry, Caveman is very tired and went offline.
								</h2>
							) : (
								""
							)}
						</div>
					)}

					<div className="space-y-5">
						{sentArr.map((message, index) => {
							return (
								<div key={index + uuidv4()}>
									<SentMsg text={message} />
									{index < resArr.length ? (
										<RecievedMsg text={resArr[index]} />
									) : (
										""
									)}
									<div
										ref={
											index === (sentArr.length || resArr.length) - 1
												? lastMsg
												: undefined
										}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="w-full h-[12%] relative bg-gray-200">
					<input
						disabled={!apiResponse}
						value={inputVal}
						type={"text"}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								{
									inputVal && apiResponse ? handleAdd(inputVal) : "";
								}
							}
						}}
						onChange={handleChange}
						className=" bg-transparent text-gray-700 outline-none px-3 w-[90%] h-full"
						placeholder={apiResponse ? "Caveman, should I hire Furkan?" : ""}
					/>
					{apiResponse && <BiSend
						size={"1.4rem"}
						color={"#EA3656"}
						onClick={() => {
							{
								inputVal && apiResponse ? handleAdd(inputVal) : "";
							}
						}}
						className="absolute top-2/4 -translate-y-2/4 right-3 cursor-pointer text-xl text-gray-500"
					/>}
				</div>
			</div>
		</m.div>
	);
}
