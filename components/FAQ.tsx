import { useState } from "react";

export interface FAQProps {
    question: string,
    answer: string
}

const FAQ = ({question, answer}: FAQProps) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="m-4">
            <div className={`w-full rounded-[16px] px-6 py-7 flex justify-between items-top ${isActive ? "bg-gradient" : "bg-white"} drop-shadow-lg`}>
                <div className="">
                    <div>
                        <h4 className="text-xl font-tommy text-gray-800 text-left" onClick={handleClick}>
                            {question}
                        </h4>
                    </div>
                    {
                        isActive &&
                            <div className="mt-4">
                                <p className="text-lg text-gray-800">
                                    {answer}
                                </p>
                            </div>
                    }
                </div>
                <div className='ml-8'>
                    <button 
                        className={`rounded-full float-right w-8 h-8 bg-[rgba(255,255,255,0.45)] font-bold text-gray-900 ${isActive ? 'active:reverse-spin' : '-rotate-45 active:animate-spin'}`}
                        dangerouslySetInnerHTML={{ __html: '&#10005;'}}
                        onClick={handleClick}></button>
                </div>
            </div>
        </div>
    )
}

export default FAQ