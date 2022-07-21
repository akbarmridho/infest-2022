import Card from "./Card";

const CardDeck = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-500 w-full mx-16 my-8 flex flex-row flex-wrap'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default CardDeck