export default function SentMsg(props) {


    return (
        <div className="bg-blue-500 ml-auto w-max max-w-[80%] px-3 py-1 mt-1 rounded-xl my-1
        shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h1 className="text-right text-white" >{props.text}</h1>
        </div >
    )
}