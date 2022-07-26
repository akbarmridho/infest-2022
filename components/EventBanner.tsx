import LinkButton from "./LinkButton"

interface Props {
    title: string,
    content: string
    actions: {
        name: string,
        href: string
    }[],
    titleSize? : string
}

const EventBanner = ({title, content, actions, titleSize} : Props) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full mx'>
                <h1 className={`${ titleSize ? titleSize : 'h1'} text-center text-gradient`}>{title}</h1>
                <p className="h3 text-center mt-6 text-gray-100">{content}</p>
                { 
                    actions.length > 0 && 
                        <div className="flex justify-center my-8 gap-x-8 flex-wrap">
                            {
                                actions.map((action, i) => {
                                    return <LinkButton name={action.name} href={action.href} key={i}/>
                                })
                            }
                        </div>
                }
            </div> 
        </div>
    )
}

export default EventBanner