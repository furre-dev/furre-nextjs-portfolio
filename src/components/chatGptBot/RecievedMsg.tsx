export default function RecievedMsg({ text }: { text: string }) {
	return (
		<div
			className="bg-gray-200 mr-auto mt-4 w-max max-w-[80%] h-max px-3 rounded-tr-xl rounded-br-xl rounded-bl-xl
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
		>
			<h1 className=" text-gray-800">{text}</h1>
		</div>
	);
}
