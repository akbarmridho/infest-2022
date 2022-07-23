import { MouseEventHandler, useState } from "react"

interface Props {
    currentActive: string,
    name: string,
    onClick?: MouseEventHandler;
}

const FAQButton = ({currentActive, name, onClick} : Props) => {
    return <button className={`drop-shadow rounded-full h-10 px-6 font-tommy text-gray-900 mx-2 text-xl ${currentActive === name ? 'bg-gradient' : 'bg-white'}`} onClick={onClick}>{ name }</button>
}

export default FAQButton