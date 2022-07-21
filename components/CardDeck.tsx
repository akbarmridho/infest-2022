import { Component, ReactNode } from "react";
import Card from "./Card";


export default class CardDeck extends Component {
    render() {
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
}