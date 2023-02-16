import { SiDiscord } from "react-icons/si"

export default function DcIcon(props) {
  const open = props.open;
  const close = props.close;
  const color = props.status;
  /* red: #b91c1c green: #16a34a*/

  const colors = {
    offline: "#a1a1aa",
    online: "#10b981",
    idle: "#f97316",
    dnd: "#FAA61A"
  }

  return (
    <div className="bg-[#00000020] p-[.4rem] rounded-lg shadow-inner shadow-2xl">
      <SiDiscord size="1.3rem" color={colors[color]} onMouseEnter={open} onMouseLeave={close} />
    </div>
  )
}