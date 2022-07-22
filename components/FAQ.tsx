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
            <div className={`w-full rounded-[16px] px-6 py-8 flex flex-row items-top ${isActive ? "bg-gradient" : "bg-white"} drop-shadow-lg`}>
                <div className="flex-grow">
                    <div>
                        <h4 className="h3 font-tommy text-gray-800">
                            {question}
                        </h4>
                    </div>
                    {
                        isActive &&
                            <div className="mt-4">
                                <p className="p text-gray-800">
                                    {answer}
                                </p>
                            </div>
                    }
                </div>
                <div className='ml-8'>
                    <button 
                        className="rounded-full float-right w-8 h-8 bg-[rgba(255,255,255,0.45)] font-bold text-gray-900"
                        dangerouslySetInnerHTML={{ __html: isActive ? '&#8211;' : '&#10005;'}}
                        onClick={handleClick}></button>
                </div>
            </div>
        </div>
    )
}

export default FAQ