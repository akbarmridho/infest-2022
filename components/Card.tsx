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
            <div className="p-[7px] rounded-3xl bg-gradient-to-b from-tgreen-200 to-gray-100">
                <div className='bg-tgreen-300 rounded-2xl w-full h-full py-4 px-2 text-gray-100'>
                    <div className='bg-gray-100 h-20 w-20 rounded-full p-4 fill-gray-900 mx-auto'>
                        { children }
                    </div>
                    <h3 className='font-tommy text-xl text-center my-4'> { title }</h3>
                    <p className='text-center text-md text-gray-300'> { content }</p>
                    <p className='text-center text-gray-200 underline my-4'><Link href={href}>Selengkapnya</Link></p>
                </div>
            </div> 
        </div>
    )
}

export default Card