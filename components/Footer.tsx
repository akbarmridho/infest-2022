import LogoInfest from "../public/logo-mini.png"
import LogoKSEP from "../public/ksep-logo.png"
import Instagram from "../public/instagram.svg"
import Linkedin from "../public/linkedin.svg"

import Image from "next/image"
import FooterContact, { ContactProps } from "./FooterContact"

interface ContactsProps {
    eventContacts: ContactProps[]
}

const Footer = ({ eventContacts } : ContactsProps) => {
    return (
        <>
        <div className="bg-tgreen-300">
            <div className="flex flex-col md:flex-row md:justify-between py-10 px-16">
                <div className="text-gray-100">
                    <div className="">
                        <h1 className="font-tommy text-4xl">INFEST 2022</h1>
                    </div>
                    <div className="">
                        <h2 className="font-tommy text-2xl">by KSEP ITB</h2>
                    </div>
                    <div className="my-3">
                        <p className="text-sm">The Biggest Investment Festival held <br/> by KSEP ITB for Indonesia</p>
                    </div>
                    <div className="flex space-x-2">
                        <div className="">
                            <a href="https://instagram.com/infest.bdg" target="_blank" rel="noopener noreferrer">
                                <Image src={Instagram} alt="instagram" width={40} height={40}/>
                            </a>
                        </div>
                        <div className="">
                            <a href="https://www.linkedin.com/company/investment-festival-itb/about/" target="_blank" rel="noopener noreferrer">
                                <Image src={Linkedin} alt="LinkedIn" width={40} height={40}/>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4 my-10 justify-center">
                        <Image src={LogoInfest} alt="logo-infest" width="105px" height="50px"/>
                        <Image src={LogoKSEP} alt="logo-infest" width="50px" height="50px" style={{marginBottom:"-7px"}}/>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <h1 className="text-4xl font-tommy text-gray-100">Informasi Kontak</h1>
                    </div>
                    <div className="flex mt-3 text-gray-100">
                        {
                            eventContacts.map((event, i) => {
                                return <FooterContact title={event.title} contacts={event.contacts} key={i}/>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="text-gray-200 py-2">
                <p className="text-center text-sm">&copy; INFEST 2022. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer