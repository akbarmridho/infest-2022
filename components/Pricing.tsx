interface Props {
    title: string,
    content: {
        name: string,
        price: string
    }[]
}

const Pricing = ({title, content} : Props) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full mx'>
                <h2 className='h2 text-center text-gradient'>{title}</h2>
                {
                    content.map((each, i) => {
                        return <p className="h3 text-center mt-6 text-gray-100" key={i}>{each.name} <br /> {each.price}</p>
                    })
                }
            </div> 
        </div>
    )
}

export default Pricing