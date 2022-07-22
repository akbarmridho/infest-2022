import TimelineDivider from "./TimelineDivider";
import TimelineItem from "./TimelineItem";

interface Event {
    name: string,
    date: string
}

interface Props {
    events: Event[]
}

const Timeline = ({ events } : Props) => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-500 mx-16 my-8 w-[600px]'>
                <div className="grid grid-cols-[260px_80px_260px]">
                    {
                        events.map((event, i) => {
                            return (
                                <>
                                    <TimelineDivider />
                                    <TimelineItem orientation={i % 2 !== 0 ? 'left' : 'right'}/>
                                </>
                            )
                        })
                    }
                    <TimelineDivider />
                </div>
            </div> 
        </div>
    )
}

export default Timeline