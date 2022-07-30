import FAQ, { FAQProps } from "./FAQ";


interface Props {
    items: FAQProps[]
}

const FAQSingleDeck = ({items} : Props) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-screen-md mx'>
                <h2 className="h2 text-center text-gradient mb-8">FAQ</h2>
                <div>
                    {
                        items.map((each, i) => {
                            return <FAQ key={i} question={each.question} answer={each.answer} />
                        })
                    }
                </div> 
            </div> 
        </div>
    )
}

export default FAQSingleDeck