import { useState } from "react"
import { Carousel } from "react-responsive-carousel"

interface Props {
  items: {
    title: string
    content: string
  }[]
}

const PrevArrow = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 17l-5-5m0 0l5-5m-5 5h12"
      />
    </svg>
  )
}

const NextArrow = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  )
}

const Slideshow = ({ items }: Props) => {
  const [activeIndex, setActiveItems] = useState<number>(0)

  const prevItem = () => {
    setActiveItems((activeIndex - 1) % items.length)
  }

  const nextItem = () => {
    setActiveItems((activeIndex + 1) % items.length)
  }

  return (
    <div className="flex justify-center items-center lg:mx-12 xl:mx-16 mx-6">
      <div className="w-full ">
        <Carousel showStatus={false} autoPlay={true} infiniteLoop={true}>
          {items.map((item, index) => {
            return (
              <div key={index} className="my-8 lg:my-12">
                <h2 className="h2 text-center text-gradient">{item.title}</h2>
                <p className="h3 text-center mt-6 text-gray-100">
                  {item.content}
                </p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Slideshow
