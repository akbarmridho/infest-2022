import { Component, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactNode
}

export default class Layout extends Component<Props, object> {
    render() {
        return (
            <>
                <Header/>
                <main className='bg-main bg-cover bg-repeat-y flex justify-center'>
                    <div className="bg-white w-full xl:max-w-screen-xl">
                        {this.props.children}
                    </div>
                </main>
                <Footer/>
            </>
        )
    }
}