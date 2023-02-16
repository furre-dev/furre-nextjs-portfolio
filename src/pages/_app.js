import "@/styles/globals.css";
import Chatbot from "@/components/chatGptBot/Chatbot";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	let currentPath = usePathname();

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Chatbot />
			<div className='App w-[90%] lg:max-w-[80%] 2xl:max-w-[80%] mx-auto'>
				<Navbar />
				<AnimatePresence mode='wait'>
					<Component {...pageProps} key={currentPath} />
				</AnimatePresence>
			</div>
		</>
	);
}
