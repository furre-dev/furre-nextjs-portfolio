import SentMsg from "./SentMsg";

export default function ChatBox({ text }: { text: string }) {
	return (
		<div>
			<SentMsg text={text} />
		</div>
	);
}
