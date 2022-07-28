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
        <div className="bg-tgreen-300 h-80 FooterContainer">
            <div className="FooterAtas bg-tgreen-300">
                <div className="FooterLeft">
                    <div className="FooterTitle poppins-bold">
                        <h1>INFEST 2022</h1>
                    </div>
                    <div className="FooterSubtitle">
                        <h2>by KSEP ITB</h2>
                    </div>
                    <div className="FooterBody">
                        <h3>The Biggest Investment Festival held by KSEP ITB for Indonesia</h3>
                    </div>
                    <div className="SocialMedia">
                        <div className="SocialIcon">
                            <a href="https://instagram.com/infest.bdg" target="_blank" rel="noopener noreferrer">
                                <Image src={Instagram} alt="instagram" />
                            </a>
                        </div>
                        <div className="SocialIcon">
                            <a href="https://www.linkedin.com/company/investment-festival-itb/about/" target="_blank" rel="noopener noreferrer">
                                <Image src={Linkedin} alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-12 justify-center">
                        <Image src={LogoInfest} alt="logo-infest" width="105px" height="50px"/>
                        <Image src={LogoKSEP} alt="logo-infest" width="50px" height="50px" style={{marginBottom:"-7px"}}/>
                    </div>
                </div>
                <div className="FooterRight">
                    <div className="FooterTitleRight poppins-bold">
                        <h1 style={{ width: "100%", marginBottom: '28px' }}>Informasi Kontak</h1>
                    </div>
                    <div className="FooterContact">
                        {
                            eventContacts.map((event, i) => {
                                return <FooterContact title={event.title} contacts={event.contacts} key={i}/>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="FooterCR bg-tgreen-300">
                <h5 style={{ textAlign: "center", fontSize: "12px" }}>&copy; INFEST 2022. All rights reserved.</h5>
            </div>
        </div>
        </>
    )
}

export default Footer