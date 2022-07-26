import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode,
    title: string,
    content: string,
    href: string
}

const Card = ( {children, title, content, href } : Props) => {
    return (
        <div className="w-[280px] p-4">
            <div className="p-[7px] rounded-3xl bg-gradient-to-b from-tgreen-200 to-gray-100 shadow-xl h-full hover:scale-105 duration-200 hover:-translate-y-1 transition ease-in-out hover:shadow-2xl hover:cursor-pointer">
                <Link href={href}>
                <div className='bg-tgreen-300 rounded-2xl py-4 px-2 text-gray-100 h-full flex flex-col justify-center'>
                    <div className='bg-gray-100 h-20 w-20 rounded-full p-4 fill-gray-900 mx-auto'>
                        { children }
                    </div>
                    <h3 className='font-tommy text-xl text-center my-4'> { title }</h3>
                    <div className='flex-grow'>
                        <p className='text-center text-md text-gray-300'> { content }</p>
                    </div>
                    <p className='text-center text-gray-200 hover:text-gray-300 my-4 font-bold'>Selengkapnya</p>
                </div>
                </Link>
            </div> 
        </div>
    )
}

export default Card