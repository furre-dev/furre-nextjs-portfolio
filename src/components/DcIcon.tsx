import { SiDiscord } from "react-icons/si";
import { memo } from "react";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const DcIcon = ({
	status,
	open,
	close,
}: { status?: string; open: any; close: any }) => {
	const colors = {
		offline: "#a1a1aa",
		online: "#10b981",
		idle: "#f97316",
		dnd: "#FAA61A",
	};

	return (
		<div className="bg-[#00000020] p-[.4rem] rounded-lg shadow-2xl">
			{status ? (
				<SiDiscord
					size="1.3rem"
					// @ts-ignore
					color={colors[status]}
					onMouseEnter={open}
					onMouseLeave={close}
				/>
			) : (
				<SiDiscord
					size="1.3rem"
					color={colors["offline"]}
					onMouseEnter={open}
					onMouseLeave={close}
				/>
			)}
		</div>
	);
};

export default memo(DcIcon);
