import Navbar from "@/components/Navbar";

export default function PortfolioLayout({ children }) {
	return (
		<>
			<Navbar variant="tertiary" />
			<main className="w-full lg:max-w-7xl px-4 mx-auto">{children}</main>
		</>
	);
}
