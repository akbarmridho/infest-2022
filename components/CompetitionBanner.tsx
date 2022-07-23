import LinkButton from "./LinkButton"

interface Props {
    title: string,
    content: string
    actions: {
        name: string,
        href: string
    }[]
}

const CompetitionBanner = ({title, content, actions} : Props) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full mx-16 my-16'>
                <h1 className='h1 text-center text-gradient'>{title}</h1>
                <p className="h3 text-center mt-6 text-gray-100">{content}</p>
                <div className="flex justify-center my-8 gap-x-8">
                    {
                        actions.map((action, i) => {
                            return <LinkButton name={action.name} href={action.href} key={i}/>
                        })
                    }
                </div>
            </div> 
        </div>
    )
}

export default CompetitionBanner