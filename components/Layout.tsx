import { ReactNode } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import eventContacts from '../data/contacts.json'
import Image from "next/image";
import backgroundImage from '../public/background-65.jpg'

interface Props {
    children: ReactNode
}

const Layout = ({children} : Props) => {
    return (
        <>
            <Header/>
                <main className='relative'>
                    <Image layout='fill' objectFit='cover' objectPosition='top' src={backgroundImage} alt="Background image" className="-z-10"/>
                    <div className="w-full xl:max-w-screen-xl relative mx-auto">
                        {children}
                    </div>
                </main>
            <Footer eventContacts={eventContacts}/>
            <BackToTop />
        </>
    )
}

export default Layout