



export default function RecievedMsg(props) {
    

    return (
        <div className="bg-gray-200 mr-auto mt-4 w-max max-w-[80%] h-max px-3 rounded-xl
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <h1 className=" text-gray-800" >{props.text}</h1>
            
        </div >
    )
}