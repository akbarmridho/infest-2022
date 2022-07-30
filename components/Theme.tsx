import Image1 from "../public/logo-circle.png"
import Image from "next/image"

interface Props {
    title: string,
    content: string
}

const Theme = ({title, content}: Props) => {
    return (
        <div className='flex justify-center mx xl:gap-20 flex-col xl:flex-row items-center'>
            <div className="w-[340px] mx-auto">
                <Image src={Image1} alt="logo-circle"/>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 lg:w-3/4 w-full text-center xl:text-left xl:m-0 mx-auto mt-8 xl:mt-0">
                <h2 className="h2 text-gradient">{ title }</h2>
                <p className="h3 text-gray-100 text-justify">{ content }</p>
            </div>
        </div>
    )
}

export default Theme