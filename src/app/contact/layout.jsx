import Navbar from "@/components/Navbar";

export default function ContactLayout({
	children,
}) {
	return (
		<>
			<Navbar variant="tertiary" />
      <main className="w-full lg:max-w-7xl px-4 mx-auto">{children}</main>
		</>
	);
}
