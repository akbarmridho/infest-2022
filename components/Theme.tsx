import Image1 from "../public/logo-circle.png"
import Image from "next/image"

interface Props {
    title: string,
    content: string
}

const Theme = ({title, content}: Props) => {
    return (
        <div className='flex justify-center mx xl:gap-40 flex-col xl:flex-row'>
            <div className="w-1/2 md:w-auto m-auto">
                <Image src={Image1} alt="logo-circle"/>
            </div>
            <div className="flex flex-col gap-10 xl:w-3/4 w-3/4 text-center m-auto xl:text-left xl:m-0">
                <h2 className="h2 text-gradient mt-16">{ title }</h2>
                <h3 className="h3 text-gray-100">{ content }</h3>
            </div>
        </div>
    )
}

export default Theme