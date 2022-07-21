import FAQ from "./FAQ";

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

const FAQDeck = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-500 w-full mx-16 my-8 max-w-screen-md'>
                {
                    data.map((each, i) => {
                        return <FAQ key={i} question={each.question} answer={each.answer} />
                    })
                }
            </div> 
        </div>
    )
}

export default FAQDeck