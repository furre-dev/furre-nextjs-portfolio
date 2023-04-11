import { useState } from "react";
import SentMsg from "./SentMsg";
import RecievedMsg from "./RecievedMsg";

export default function ChatBox(props) {
	const text = props.text;

	return (
		<div>
			<SentMsg text={text} />
		</div>
	);
}
