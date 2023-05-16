import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

export default function MobileNavbar({
	closeNavBar,
}: { closeNavBar: React.MouseEventHandler<HTMLElement> }) {
	return (
		<div className="mobileNavbarDiv lg:hidden absolute pointer-events-auto  max-w-2/4 w-40 h-screen top-0 right-0">
			<button className="ml-auto m-3 block" onClick={closeNavBar}>
				<IoCloseOutline size={"2rem"} />
			</button>
			<ul className="px-7 text-right space-y-5">
				<li>
					<Link
						href={"/"}
						className="font-display text-[#EA3656] font-medium text-3xl"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href={"/about"}
						className="font-display text-[#EA3656] font-medium text-3xl"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href={"/portfolio"}
						className="font-display text-[#EA3656] font-medium text-3xl"
					>
						Portfolio
					</Link>
				</li>
				<li>
					<Link
						href={"/contact"}
						className="font-display text-[#EA3656] font-medium text-3xl"
					>
						Contact
					</Link>
				</li>
				<li>
					<Link
						href={"https://github.com/furre-dev"}
						className="font-display text-[#EA3656] font-medium text-3xl"
					>
						Home
					</Link>
				</li>
			</ul>
		</div>
	);
}
