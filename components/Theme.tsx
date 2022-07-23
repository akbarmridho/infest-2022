import Image1 from "../public/logo-circle.png"
import Image from "next/image"
const Theme = () => {
    return (
        <div className='flex justify-center xl:mt-60 xl:gap-40 flex-col xl:flex-row mt-40'>
            <div className="w-1/2 md:w-auto m-auto">
                <Image src={Image1} alt="logo-circle"/>
            </div>
            <div className="flex flex-col gap-10 xl:w-3/4 w-3/4 text-center m-auto xl:text-left xl:m-0">
                <h2 className="h2 text-gradient mt-16">Lorem Ipsum</h2>
                <h3 className="h3 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec feugiat, eros in euismod laoreet, lectus lectus dapibus erat, 
                    eget consectetur ante ante id sapien. Donec sed tortor in felis 
                    fermentum consectetur. Integer laoreet
                </h3>
            </div>
        </div>
    )
}

export default Theme