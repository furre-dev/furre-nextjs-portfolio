import { SiDiscord } from "react-icons/si";
import { memo } from "react";

const DcIcon = (props) => {
	const color = props.status;
	const open = props.open;
  const close = props.close;

	const colors = {
		offline: "#a1a1aa",
		online: "#10b981",
		idle: "#f97316",
		dnd: "#FAA61A",
	};

	return (
		<div className="bg-[#00000020] p-[.4rem] rounded-lg shadow-2xl">
			{color ? <SiDiscord
				size="1.3rem"
				color={colors[color]}
				onMouseEnter={open}
				 onMouseLeave={close}
			/>
		:
		<SiDiscord
				size="1.3rem"
				color={colors["offline"]}
				onMouseEnter={open}
				 onMouseLeave={close}
			/>
		}
		</div>
	);
};

export default memo(DcIcon);
