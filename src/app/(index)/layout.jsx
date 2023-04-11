import Navbar from "@/components/Navbar";

export default function IndexLayout({
	children, 
}) {
	return (
		<>
			<Navbar variant="primary" />
			<main className="w-full lg:max-w-[90rem] px-4 mx-auto">{children}</main>
		</>
	);
}
