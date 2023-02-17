import {motion as m } from "framer-motion"

export default function ContactForm() {
    return (
        <m.div
        initial={{opacity: 0}}
		animate={{opacity: 1 }}
		transition={{
		delay: 0.9,
		duration: 0.7,
		type: "spring",
		bounce: 0.4,
		}}
        className="py-1 2xl:h-[30rem] lg:h-[22rem] lg:w-[20rem] 2xl:w-[25rem] rounded-t-3xl fixed bottom-0 left-2/4 -translate-x-2/4 bg-[#F1F8F7] fullShadow">
            <div className="h-1/6 flex justify-center items-center">
                <h2 className="font-outfit text-xl 2xl:text-2xl">Contact me!</h2>
            </div>
            <div className="h-5/6">
                <form
                    className="flex flex-col w-3/4 mx-auto h-full space-y-6"
                    action="https://formsubmit.co/furkan_abay@hotmail.com"
                    method="POST"
                >
                    <input
                        className="px-1 font-outfit  h-9 outline-none border border-[#c4c4c4] bg-transparent rounded-lg text-black"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        className="px-1 font-outfit  h-9 outline-none border border-[#c4c4c4] bg-transparent rounded-lg text-black"
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        required
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:3000/contact"
                    />
                    <textarea
                        className="px-1 font-outfit  h-36 outline-none border border-[#c4c4c4] bg-transparent rounded-lg text-black"
                        type="text"
                        name="message"
                        placeholder="Your message..."
                        required
                    />
                    <button
                        className="bg-[#EA3656] w-max mx-auto px-10 py-2 rounded-xl text-[#F1F8F7] font-outfit font-black"
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </m.div>
    )
}