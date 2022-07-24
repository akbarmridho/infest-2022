import { useState } from "react";
import FAQ, { FAQProps } from "./FAQ";
import FAQButton from "./FAQButton";




interface Props {
    items: {
        [key: string] : FAQProps[]
    }
}

const FAQMultipleDeck = ({items}: Props) => {
    const [activeItems, setActiveItems] = useState<string>(Object.keys(items)[0])

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-screen-md mx'>
                <h2 className="h2 text-center text-gradient mb-8">FAQ</h2>
                <div className="flex justify-center">
                    {
                        Object.keys(items).map((key, i) => {
                            return <FAQButton key={i} name={key} onClick={() => setActiveItems(key)} currentActive={activeItems}/>
                        })
                    }
                </div>
                <div className="mt-8">
                    {
                        items[activeItems].map((item, i) => {
                            return <FAQ key={i} question={item.question} answer={item.answer} />
                        })
                    }
                </div> 
            </div> 
        </div>
    )
}

export default FAQMultipleDeck