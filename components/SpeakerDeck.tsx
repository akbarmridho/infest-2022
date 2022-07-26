import Speaker, { SpeakerProps } from "./Speaker";

interface Props {
    speakers: Omit<SpeakerProps, 'pos'>[]
}


const SpeakerDeck = ({ speakers }: Props) => {
    return (
        <div className='flex justify-center'>
            <div className="w-full mx max-w-screen-md">
                <h2 className="h2 text-center text-gradient mb-4 lg:mb-6">Pembicara Kami</h2>
                <div className='flex flex-col'>
                    {
                        speakers.length > 0 ?
                            speakers.map((speaker, i) => {
                                return (
                                    <Speaker name={speaker.name} topic={speaker.topic} imageUrl={speaker.imageUrl} pos={ i % 2 === 0 ? 'left' : 'right'} key={i}/>
                                )
                            })
                        : <h3 className="text-center text-gray-100 text-3xl font-tommy my-4">Akan diumumkan di kemudian hari</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default SpeakerDeck