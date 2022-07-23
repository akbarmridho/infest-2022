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
            <div className='mx-16 my-8 w-[600px]'>
                <h2 className="h2 text-center text-gradient">Timeline</h2>
                <div className="grid grid-cols-[260px_80px_260px] mt-4">
                    {
                        events.map((event, i) => {
                            return (
                                <>
                                    <TimelineDivider />
                                    <TimelineItem orientation={i % 2 !== 0 ? 'left' : 'right'} key={i} name={event.name} date={event.date}/>
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