import { Component } from "react";
import TimelineItem from "./TimelineItem";

export default class Timeline extends Component {
    render() {
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
}