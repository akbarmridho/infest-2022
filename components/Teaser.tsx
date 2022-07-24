const Teaser = () => {
    return (
        <div className='flex justify-center mx'>
            <div>
                <h2 className="text-gradient text-center h2 mb-4 lg:mb-8">Teaser</h2>
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="lg:w-[816px] lg:h-[462px] md:w-[608px] md:h-[431px] w-[408px] h-[231px]"
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Teaser