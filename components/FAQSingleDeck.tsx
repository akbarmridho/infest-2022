import FAQ, { FAQProps } from "./FAQ";

const data = [
    {
        question: 'lorem ipsum dos color sit amet',
        answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
    },
    {
        question: 'lorem ipsum dos color sit amet',
        answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
    },
    {
        question: 'lorem ipsum dos color sit amet',
        answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
    }
]


interface Props {
    items: FAQProps[]
}

const FAQSingleDeck = ({items} : Props) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full mx-16 my-8 max-w-screen-md'>
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