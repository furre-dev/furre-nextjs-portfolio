"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DiscordStatus from "./DiscordStatus";
import MobileNavbar from "./MobileNavbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion as m } from "framer-motion";

function Navbar() {
	const pathname = usePathname();

	const [selectedColorScheme, setSelectedColorScheme] = useState<
		"primary" | "secondary" | "tertiary"
	>("primary");
	const [mobileNavActive, setMobileNavActive] = useState<boolean>(false);

	useEffect(() => {
		switch (pathname) {
			case "/about":
				setSelectedColorScheme("secondary");
				break;
			case "/portfolio":
				setSelectedColorScheme("tertiary");
				break;
			case "/contact":
				setSelectedColorScheme("tertiary");
				break;
			default:
				setSelectedColorScheme("primary");
		}
	}, [pathname]);

	const colors = useMemo(() => {
		/* Color Palette!
		Red: #EA3656,
		Gray: #454555
		White: #D9F0EE
		*/
		return {
			primary: {
				first: "#D9F0EE",
				second: "#EA3656",
				third: "#454555",
				hover: "#FFFFFF",
			},
			secondary: {
				first: "#D9F0EE",
				second: "#F1F8F7",
				third: "#F1F8F7",
				hover: "#454555",
			},
			tertiary: {
				first: "#D9F0EE",
				second: "#EA3656",
				third: "#F1F8F7",
				hover: "#454555",
			},
		};
	}, []);

	return (
		<nav
			className={"sticky w-screen px-4 mx-auto top-0 z-40 pointer-events-none"}
		>
			<div className="flex justify-center lg:justify-between items-center py-3  md:py-10">
				<Link
					href={"/"}
					style={{ color: colors[selectedColorScheme].third }}
					className={`logoLeft ${
						!mobileNavActive ? "pointer-events-auto " : "pointer-events-none"
					} font-display font-black text-xl md:text-2xl  2xl:text-2xl`}
				>
					FURK
					<span style={{ color: colors[selectedColorScheme].second }}>A</span>
					N.
				</Link>
				{mobileNavActive ? (
					<MobileNavbar
						closeNavBar={() => {
							console.log("done");
							setMobileNavActive(false);
						}}
					/>
				) : (
					<m.button
						initial={{ y: -40 }}
						animate={{ y: 0 }}
						transition={{ type: "spring" }}
						onClick={() => {
							setMobileNavActive(true);
						}}
						className="absolute lg:hidden top-0 right-0 p-3 z-100 pointer-events-auto button-style"
					>
						<RxHamburgerMenu size={"1.5rem"} color="#454555" />
					</m.button>
				)}
				<ul className="space-x-16 hidden lg:flex items-center text-black">
					{pathname !== "/" ? (
						<li
							style={{ color: colors[selectedColorScheme].third }}
							className={
								"navText  items-center pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/"}>Home</Link>
						</li>
					) : (
						<li
							style={{ color: colors[selectedColorScheme].second }}
							className={
								"navText  items-center pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/"}>Home</Link>
						</li>
					)}
					{pathname !== "/about" ? (
						<li
							style={{ color: colors[selectedColorScheme].third }}
							className={
								"navText  pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/about"}>About</Link>
						</li>
					) : (
						<li
							style={{ color: colors[selectedColorScheme].hover }}
							className={
								"navText  pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/about"}>About</Link>
						</li>
					)}
					{pathname !== "/portfolio" ? (
						<li
							style={{ color: colors[selectedColorScheme].third }}
							className={
								"navText pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/portfolio"}>Portfolio</Link>
						</li>
					) : (
						<li
							style={{ color: colors[selectedColorScheme].second }}
							className={
								"navText pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/portfolio"}>Portfolio</Link>
						</li>
					)}
					{pathname !== "/contact" ? (
						<li
							style={{ color: colors[selectedColorScheme].third }}
							className={
								"navText pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/contact"}>Contact</Link>
						</li>
					) : (
						<li
							style={{ color: colors[selectedColorScheme].hover }}
							className={
								"navText pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<Link href={"/contact"}>Contact</Link>
						</li>
					)}
					<div className="flex items-center space-x-8">
						<li
							style={{ color: colors[selectedColorScheme].third }}
							className={
								"navText pointer-events-auto font-display font-medium text-lg lg:text-base"
							}
						>
							<a href="https://github.com/furre-dev" target={"_blank"}>
								Github
							</a>
						</li>
						<DiscordStatus />
					</div>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
