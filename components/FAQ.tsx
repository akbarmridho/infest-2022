import { Component } from "react";

interface Props {
    question: string,
    answer: string
}

interface State {
    active: boolean
}

export default class FAQ extends Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {active: false}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState(state => ({active: !state.active}))
    }

    render() {
        return (
            <div className="m-4">
                <div className={`w-full rounded-[16px] px-5 py-6 flex flex-row items-top ${this.state.active ? "bg-tyellow-100" : "bg-white"}`}>
                    <div className="flex-grow">
                        <div className='text-lg font-semibold'>
                            {this.props.question}
                        </div>
                        {
                            this.state.active &&
                                <div className="mt-4">
                                    {this.props.answer}
                                </div>
                        }
                    </div>
                    <div className='ml-8'>
                        <button 
                            className="rounded-full float-right w-8 h-8 bg-[rgba(255,255,255,0.45)] font-bold text-gray-900"
                            dangerouslySetInnerHTML={{ __html: this.state.active ? '&#8211;' : '&#10005;'}}
                            onClick={this.handleToggleClick}></button>
                    </div>
                </div>
            </div>
        )
    }
}