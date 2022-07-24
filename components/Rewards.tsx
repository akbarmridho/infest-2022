import Reward from "./Reward";

const prizes = [
    {
        position: 1,
        backgroundColor: '#FFD700',
        prize: 'Rp5.000.000'
    },
    {
        position: 2,
        backgroundColor: '#DBD7CE',
        prize: 'Rp3.000.000'
    },
    {
        position: 3,
        backgroundColor: '#F69312',
        prize: 'Rp1.000.000'
    }
]

const Rewards = () => {
    return (
        <div className='flex justify-center'>
            <div className="w-full mx max-w-screen-lg">
                <h2 className="h2 text-gradient text-center mb-4">Hadiah</h2>
                <div className='flex flex-row flex-wrap'>
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