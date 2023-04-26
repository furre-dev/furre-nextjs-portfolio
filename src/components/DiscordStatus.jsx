
import { useState, useEffect, useRef, memo } from "react";
import { useLanyard } from "react-use-lanyard";
import DcTooltip from "./DcTooltip";
import DcIcon from "./DcIcon";

const DiscordStatus = () => {
	const [discordStatus, setDiscordStatus] = useState("offline");
  const [discordName, setDiscordName] = useState("");

	const { loading, status } = useLanyard({ userId: "232921014068183050", socket: true });

	useEffect(() => {

    if (!loading) {
      if (status) {
        console.log("status is", status)
        const text = JSON.stringify(status, null, 4);
        const obj = JSON.parse(text)
        const dcStatus = obj.discord_status;
        setDiscordStatus(dcStatus)
        setDiscordName(`${obj.discord_user.username}#${obj.discord_user.discriminator}`)

      } else {
        console.error("status is undefined");
      }
    }
  }, [status])

	 //Makes so that tooltip doesnt dissapear if user moves mouse from icon to tooltip
	 const [tooltip, setTooltip] = useState(false);
	 const [hoverIcon, setHoverIcon] = useState(false);
	 const [hoverTooltip, setHoverTooltip] = useState(false);
 
 
	 useEffect(() => {
		 if (!(hoverIcon || hoverTooltip)) {
			 setTooltip(false)
		 } else {
			 setTooltip(true)
		 }
	 }, [hoverIcon, hoverTooltip])

	return (
		<li
			className={`pointer-events-auto relative cursor-pointer text-lg lg:text-base text-${status?.discord_status}-600`}
		>
			<DcIcon
				open={() => setHoverIcon(true)}
				close={() => setHoverIcon(false)}
				status={status?.discord_status}
			/>
			{/* <IoLogoDiscord size="1.5rem" onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)} /> */}
			<DcTooltip
				username={`${status?.discord_user.username}#${status?.discord_user.discriminator}`}
				open={() => setHoverTooltip(true)}
				close={() => setHoverTooltip(false)}
				func={tooltip}
			/>
		</li>
	);
};

export default memo(DiscordStatus);
