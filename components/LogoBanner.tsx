import Image from "next/image"
import logoImage from '../public/logo-banner.png'

const LogoBanner = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-full mx'>
                <div className="flex justify-center my-4">
                    <Image src={logoImage} alt="Investment Festival (INFEST) 2022"/>
                </div>
                <h2 className="text-gray-100 text-4xl text-center">The Biggest Investment Festival Held by <br />KSEP ITB for Indonesia</h2>
            </div> 
        </div>
    )
}

export default LogoBanner