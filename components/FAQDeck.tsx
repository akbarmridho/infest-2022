import { Component } from "react";
import FAQ from "./FAQ";

export default class FAQDeck extends Component {
    render() {
        return (
            <div className='flex justify-center'>
                <div className='bg-gray-500 w-full mx-16 my-8 max-w-screen-md'>
                    <FAQ question='lorem ipsum dos color sit amet' answer='this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'/>
                    <FAQ question='lorem ipsum dos color sit amet' answer='this is some fucking answer'/>
                    <FAQ question='lorem ipsum dos color sit amet' answer='this is some fucking answer'/>
                </div> 
            </div>
        )
    }
}