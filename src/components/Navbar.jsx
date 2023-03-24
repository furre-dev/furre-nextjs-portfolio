import { useState, useEffect } from "react";
import { IoLogoDiscord } from "react-icons/io5"
import DcTooltip from "./DcTooltip";
import DcIcon from "./DcIcon";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { useRouter } from "next/router";



import { useLanyard } from "react-use-lanyard";


function Navbar() {
  const [discordStatus, setDiscordStatus] = useState("offline");
  const [discordName, setDiscordName] = useState("");

  const { loading, status /*, websocket */ } = useLanyard({
    userId: "232921014068183050",
    socket: true,
  });

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






  const router = useRouter()

  /*   const isHomePage = router.asPath === '/'
    const isAboutPage = router.asPath === '/about'
    const isContactPage = router.asPath === '/contact'
   */

  const props = {
    colors: {
      /* Color Palette!
      Red: #EA3656,
      Gray: #454555
      White: #D9F0EE
      */
      "/": {
        main: "#D9F0EE",
        secondary: "#EA3656",
        third: "#454555",
        hover: "#FFFFFF"
      },
      "/about": {
        main: "#D9F0EE",
        secondary: "#D9F0EE",
        third: "#F1F8F7",
        hover: "#454555"
      },
      "/portfolio": {
        main: "#D9F0EE",
        secondary: "#EA3656",
        third: "#F1F8F7",
        hover: "#454555"
      },
      "/contact": {
        main: "#D9F0EE",
        secondary: "#EA3656",
        third: "#F1F8F7",
        hover: "#454555"
      }
    }
  }


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
    <nav className={"sticky top-0 z-40 relative pointer-events-none"}>
      <div className="absolute h-full w-screen -z-10"> </div>
      <div className="flex justify-center lg:justify-between items-center py-5  2xl:py-10">
        <Link href={"/"}
          style={{ color: props.colors[router.asPath].third }}
          className={"logoLeft pointer-events-auto font-outfit font-black text-xl md:text-2xl  2xl:text-2xl"}>
          FURK<span
            style={{ color: props.colors[router.asPath].secondary }}
          >A</span>N.
        </Link>
        <ul className="space-x-16 hidden lg:flex items-center text-black">
          <li
            style={{ color: props.colors[router.asPath].third }}
            className={"navText  items-center pointer-events-auto font-outfit font-medium text-lg lg:text-base"}>
            <Link
              href={"/"}>Home</Link>

          </li>
          <li style={{ color: props.colors[router.asPath].third }}
            className={"navText  pointer-events-auto font-outfit font-medium text-lg lg:text-base"}>
            <Link
              href={"/about"}>About</Link>

          </li>
          <li
            style={{ color: props.colors[router.asPath].third }}
            className={"navText pointer-events-auto font-outfit font-medium text-lg lg:text-base"}><Link href={"/portfolio"}>Portfolio</Link></li>
          <li
            style={{ color: props.colors[router.asPath].third }}
            className={"navText pointer-events-auto font-outfit font-medium text-lg lg:text-base"}><Link href={"/contact"}>Contact</Link></li>
          <div className="flex items-center space-x-8">
            <li
              style={{ color: props.colors[router.asPath].third }}
              className={"navText pointer-events-auto font-outfit font-medium text-lg lg:text-base"}><a href="https://github.com/furreabay" target={"_blank"}>Github</a></li>
            <li className={`pointer-events-auto relative cursor-pointer text-lg lg:text-base text-${discordStatus}-600`}>
              <DcIcon open={() => setHoverIcon(true)} close={() => setHoverIcon(false)} status={discordStatus} />
              {/* <IoLogoDiscord size="1.5rem" onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)} /> */}
              <DcTooltip username={discordName} open={() => setHoverTooltip(true)} close={() => setHoverTooltip(false)} func={tooltip} />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;