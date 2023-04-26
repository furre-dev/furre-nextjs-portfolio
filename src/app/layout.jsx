import Head from "next/head";
import "../styles/globals.css";

import { Outfit, Lato } from "next/font/google";

import Navbar from "@/components/Navbar";
import Chatbot from "@/components/chatGptBot/Chatbot";

import { AnimatePresence } from "framer-motion";

const outfitFont = Outfit({
	variable: "--display-font",
	display: "swap",
	subsets: ["latin"],
	weight: ["100", "300", "400","500" , "700", "900"],
});

const latoFont = Lato({
	variable: "--body-font",
	display: "swap",
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
	title: "Furkan - Portfolio",
	description: "Welcome to Furkan's Next.js portfolio",
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}) {
	return (
		<html lang="en" className={`${outfitFont.variable} ${latoFont.variable}`}>
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
			<body className={"flex flex-col mx-auto"}>
				<div className="app w-[80%] mx-auto">
					<Navbar />
					{typeof window === "undefined" ? (
						<div>{children}</div>
					) : (
						<AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
					)}
					<Chatbot />
				</div>
			</body>
		</html>
	);
}
