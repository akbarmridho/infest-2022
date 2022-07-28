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
        <div className="FooterEvent">
            <h4 className="font-bold text-xl">{ title }</h4>
            {
                React.Children.toArray(
                    contacts.map(contact => {
                        return <>
                            <h5 className="ContactName font-semibold">{contact.name}</h5>
                            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <div className="Whatsapp">
                                <h5>{contact.whatsapp}</h5>
                                <div className="ContactIcon">
                                    <Image src={Whatsapp} alt="Whatsapp" />
                                </div>
                            </div>
                            </a>
                            <a href={`https://line.me/ti/p/~${contact.line}`} target="_blank" rel="noopener noreferrer">
                            <div className="Line">
                                <h5>{contact.line}</h5>
                                <div className="ContactIcon">
                                    <Image src={Line} alt="Line" />
                                </div>
                            </div>
                            </a>
                        </>
                    })
                )
            }
        </div>
)
}

export default FooterContact