import Image from "next/image"
import React from "react"
import Line from "../public/line.svg"
import Whatsapp from "../public/whatsapp.svg"

export interface ContactProps {
    title: string,
    contacts: {
        name: string,
        whatsapp: string,
        line: string
    }[]
}

const FooterContact = ({ title, contacts } : ContactProps) => {
    return (
        <div className="md:first:mr-8 space-y-4 my-4 text-center md:text-left">
            <h4 className="font-bold text-xl">{ title }</h4>
            {
                contacts.map(contact => {
                    return (<>
                        <h5 className="font-semibold">{contact.name}</h5>
                        <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <div className='flex items-center space-x-1 mt-2 justify-center md:justify-start'>
                            <Image src={Whatsapp} alt="Whatsapp" width={30} height={30} className=""/>
                            <h5>{contact.whatsapp}</h5>
                        </div>
                        </a>
                        <a href={`https://line.me/ti/p/~${contact.line}`} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center space-x-1 mt-1 justify-center md:justify-start">
                            <Image src={Line} alt="Line" width={30} height={30} className="mr-2"/>
                            <h5>{contact.line}</h5>
                        </div>
                        </a>
                    </>)
                })
            }
        </div>
)
}

export default FooterContact