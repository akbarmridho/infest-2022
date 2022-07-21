import { useState } from "react";

interface Props {
    question: string,
    answer: string
}

const FAQ = ({question, answer}: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="m-4">
            <div className={`w-full rounded-[16px] px-5 py-6 flex flex-row items-top ${isActive ? "bg-tyellow-100" : "bg-white"}`}>
                <div className="flex-grow">
                    <div className='text-lg font-semibold'>
                        {question}
                    </div>
                    {
                        isActive &&
                            <div className="mt-4">
                                {answer}
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