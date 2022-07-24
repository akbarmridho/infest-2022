interface Props {
    position: number,
    backgroundColor: string,
    prize: string
}

const PrizeIcon = () => {
    return <svg width="83" height="76" viewBox="0 0 83 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.2576 0.114258C65.2576 33.5132 47.9023 44.586 46.2056 58.0335H36.6524C34.9523 44.586 17.5595 33.5132 17.5595 0.114258H65.2576Z" fill="#00192E"/>
        <path d="M23.9408 39.0871C22.9289 37.2064 21.9102 35.186 20.9358 33.0124C11.0044 27.8269 7.18172 18.5326 5.72692 11.7151H14.8884C14.6874 10.182 14.5375 8.57046 14.4148 6.92828H0.524414C1.79182 20.9141 10.0913 34.4944 23.9408 39.0871Z" fill="#00192E"/>
        <path d="M55.0366 75.0685V70.3634C48.2294 70.3634 46.962 65.4846 46.3044 61.4405H36.5399C35.8517 65.4812 34.3935 70.3634 27.7805 70.3634V75.0685H55.0366Z" fill="#00192E"/>
        <path d="M58.8763 39.0837C72.7258 34.4944 81.0253 20.9141 82.2927 6.92828V6.92488H68.4057C68.2831 8.57046 68.1332 10.1786 67.9322 11.7117H77.0902C75.6354 18.5292 71.8127 27.8269 61.8813 33.009C60.9069 35.1826 59.8882 37.203 58.8763 39.0837Z" fill="#00192E"/>
    </svg>
}

const Reward = ({position, backgroundColor, prize} : Props) => {
    return (
        <div className="basis-full md:basis-1/4 p-4 my-2">
            <div className="flex justify-center mb-4">
                <div className='h-[150px] w-[150px] rounded-full grid grid-cols-1 place-items-center relative' style={{backgroundColor}}>
                    <div>
                        <PrizeIcon />
                    </div>
                    <p className="absolute top-[42px] left-[65px] text-3xl font-bold text-gray-100">{position}</p>
                </div>
            </div>
            <p className="text-3xl text-gray-100 text-center">
                    { prize }
            </p>
        </div>
    )
}

export default Reward