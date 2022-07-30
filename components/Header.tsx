import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/logo-mini.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

const scale = (80-2*16)/logo.height

const Header = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)

    const handleDropdown = () => setDropdown(!dropdown)
    const toggleOn = () => setDropdown(true)
    const toggleOff = () => setDropdown(false)

    const router = useRouter()

    return (
        <>
            <div className="w-full bg-tgreen-300 h-20">
                <div className="flex justify-between items-center">
                    <div className='my-4 ml-8'>
                        <Image src={logo} alt="Logo mini" height={scale*logo.height} width={scale*logo.width} onClick={() => router.push('/')}/>
                    </div>
                    <div className='mr-8 flex text-gray-100'>
                        <div className='mr-8 text-gray-100 text-lg hover:text-gray-300 hover:cursor-pointer'>
                            <Link href='/' ><p>Beranda</p></Link>
                        </div>
                        <div className='relative' onMouseEnter={toggleOn} onMouseLeave={toggleOff}>
                            <button className='text-gray-100 text-lg inline-flex items-center hover:text-gray-300' onClick={handleDropdown}>
                                Acara
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <div className={`absolute right-0 z-50 rounded divide-y divide-gray-100 shadow bg-tgreen-200 ${dropdown ? '' : 'hidden'}`}>
                                <ul className="py-1 text-sm text-white">
                                    <Link href='/competition/trading'>
                                        <li className="block py-2 px-4 hover:bg-tgreen-300 hover:cursor-pointer">
                                            Trading Competition
                                        </li>
                                    </Link>
                                    <Link href='/competition/research'>
                                        <li className="block py-2 px-4 hover:bg-tgreen-300 hover:cursor-pointer">
                                            Equity Research Competition
                                        </li>
                                    </Link>
                                    <Link href='/main-event' >
                                        <li className="block py-2 px-4 hover:bg-tgreen-300 hover:cursor-pointer">
                                            Main Event
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header