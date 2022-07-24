import Reward from "./Reward";

interface Props {
    prizes: {
        position: number,
        backgroundColor: string,
        prize: string
    }[]
}

const Rewards = ({ prizes } : Props) => {
    return (
        <div className='flex justify-center'>
            <div className="w-full mx max-w-screen-lg">
                <h2 className="h2 text-gradient text-center mb-4">Hadiah</h2>
                <div className='flex flex-row flex-wrap justify-center'>
                    {
                        prizes.map((prize, i) => {
                            return <Reward position={prize.position} prize={prize.prize} backgroundColor={prize.backgroundColor} key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Rewards