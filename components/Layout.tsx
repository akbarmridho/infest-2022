import { ReactNode } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import eventContacts from '../data/contacts.json'

interface Props {
    children: ReactNode
}

const Layout = ({children} : Props) => {
    return (
        <>
            <Header/>
                <main className='bg-main-50 bg-cover bg-repeat-y flex justify-center'>
                    <div className="w-full xl:max-w-screen-xl">
                        {children}
                    </div>
                </main>
            <Footer eventContacts={eventContacts}/>
            <BackToTop />
        </>
    )
}

export default Layout