import Reward from "./Reward";

const Rewards = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-500 w-full mx-16 my-8 flex flex-row flex-wrap'>
                <Reward/>
                <Reward/>
                <Reward/>
            </div>
        </div>
    )
}

export default Rewards