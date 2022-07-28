import { useEffect, useState } from "react";

const BackToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const onClick = () => {
        window.scrollTo({top: 0, left:0, behavior: 'smooth'})
    }

    return (
        <button className={`bottom-6 right-6 w-12 h-12 rounded-full bg-white z-10 fixed shadow-md bg-opacity-30 hover:bg-opacity-50 fill-gray-700 ${scrollPosition < 20 ? 'hidden' : ''}`} onClick={onClick}>
            <svg aria-hidden="true" focusable="false" className="p-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
        </button>
    )
}

export default BackToTop