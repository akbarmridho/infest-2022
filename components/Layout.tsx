import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactNode
}

const Layout = ({children} : Props) => {
    return (
        <>
            <Header/>
                <main className='bg-main-50 bg-cover bg-repeat-y flex justify-center'>
                    <div className="bg-white w-full xl:max-w-screen-xl">
                        {children}
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Layout