import Navbar from "@/components/Navbar";

export default function AboutLayout({
	children,
}) {
	return (
		<>
			<Navbar variant="secondary" />
      <main className="w-full lg:max-w-7xl px-4 mx-auto">{children}</main>
		</>
	);
}
