import LogoInfest from "../public/logo-mini.png"
import LogoKSEP from "../public/ksep-logo.webp"
import Instagram from "../public/instagram.svg"
import Linkedin from "../public/linkedin.svg"
import Line from "../public/line.svg"
import Whatsapp from "../public/whatsapp.svg"

import Image from "next/image"

// tambahkan kontak

const Footer = () => {
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
                    <div className="flex Logos gap-4">
                        <Image src={LogoInfest} alt="logo-infest" width="105px" height="50px"/>
                        <Image src={LogoKSEP} alt="logo-infest" width="50px" height="50px" style={{marginBottom:"-7px"}}/>
                    </div>
                </div>
                <div className="FooterRight">
                    <div className="FooterTitleRight poppins-bold">
                        <h1 style={{ width: "100%", marginBottom: '28px' }}>Informasi Kontak</h1>
                    </div>
                    <div className="FooterContact">
                        <div className="FooterEvent">
                            <h4>Workshop</h4>
                            <h5 className="ContactName">Nama</h5>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <Image src={Whatsapp} alt="Whatsapp" />
                                </div>
                            </div>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <Image src={Line} alt="Line" />
                                </div>
                            </div>
                            </a>

                            <h5 className="ContactName">Nama</h5>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <Image src={Whatsapp} alt="Whatsapp" />
                                </div>
                            </div>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <Image src={Line} alt="Line" />
                                </div>
                            </div>
                            </a>

                        </div>
                        <div className="FooterEvent">
                            <h4 style={{ textOverflow: 'wrap' }}>Trading Competition</h4>
                            <h5 className="ContactName">Nama</h5>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <Image src={Whatsapp} alt="Whatsapp" />
                                </div>
                            </div>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <Image src={Line} alt="Line" />
                                </div>
                            </div>
                            </a>

                            <h5 className="ContactName">Nama</h5>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <Image src={Whatsapp} alt="Whatsapp" />
                                </div>
                            </div>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <Image src={Line} alt="Line" />
                                </div>
                            </div>
                            </a>

                        </div>
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