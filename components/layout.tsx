import { Component, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface Props {
    children: ReactNode
}

export default class Layout extends Component<Props, object> {
    render() {
        return (
            <>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </>
        )
    }
}