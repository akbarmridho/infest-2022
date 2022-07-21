import TimelineItem from "./TimelineItem";

const Timeline = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-500 mx-16 my-8 h-72 w-1/2'>
                <div className="grid grid-cols-[280px_80px_280px]">
                    <TimelineItem/>
                </div>
            </div> 
        </div>
    )
}

export default Timeline