interface Props {
    orientation: 'left' | 'right',
    name: string,
    date: string
}

const TimelineItem = ({orientation, name, date} : Props) => {
    return (<>
        <div className="flex items-center relative text-gray-100">
            { orientation === 'left' && 
                <>
                <div className="h-[5px] bg-gradient-to-r from-tyellow-300 to-tyellow-100 w-full"></div>
                <h4 className="font-tommy text-3xl absolute bottom-11 right-2">{name}</h4>
                <p className="text-xl absolute bottom-2 top-11 right-2">{date}</p>
            </>}
        </div>
        <div className='h-20 w-20 relative'>
            <div className={`h-16 w-16 rounded-full absolute left-2 top-2 from-tyellow-100 to-tgreen-100 ${orientation === 'left' ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'}`}>
            </div>
            <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className={`absolute top-0 left-0 ${orientation === 'left' ? 'flip-x' : ''}`} fill='url(#gradCircle)'>
                    <defs>
                        <linearGradient id="gradCircle" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: '#F6E272', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#F69312', stopOpacity: 1}} />
                        </linearGradient>
                    </defs>
                <path d="M80 37.9999C80 45.9112 77.6541 55.6448 73.2588 62.2228C68.8635 68.8007 62.6164 73.9276 55.3073 76.9551C47.9983 79.9826 39.9556 80.7748 32.1964 79.2314C24.4371 77.688 17.3098 73.8786 11.7157 68.2845C6.12159 62.6904 2.31197 55.5629 0.768555 47.8036C-0.774859 40.0444 0.0172524 32.0018 3.04475 24.6927C6.07226 17.3837 11.1992 11.1363 17.7771 6.74108C24.3551 2.34582 34.0887 7.35608e-06 41.9999 0V5.04601C35.0867 5.04602 26.3287 7.09573 20.5805 10.9365C14.8323 14.7774 10.3521 20.2366 7.70653 26.6236C5.06093 33.0107 4.36874 40.039 5.71746 46.8194C7.06618 53.5999 10.3952 59.828 15.2837 64.7165C20.1721 69.6049 26.4003 72.9338 33.1808 74.2825C39.9612 75.6313 46.9893 74.9389 53.3764 72.2934C59.7634 69.6478 65.2225 65.1677 69.0633 59.4195C72.9041 53.6714 74.9542 44.9132 74.9542 37.9999H80Z" />
            </svg>
        </div>
        <div className="flex items-center relative text-gray-100">
            { orientation === 'right' && <>
                <div className="h-[5px] w-full bg-gradient-to-l from-tyellow-300 to-tyellow-100"></div>
                <h4 className="font-tommy text-3xl absolute bottom-11 left-2">{name}</h4>
                <p className="text-xl absolute bottom-2 top-11 left-2">{date}</p>
            </>}
        </div>
    </>)
}

export default TimelineItem