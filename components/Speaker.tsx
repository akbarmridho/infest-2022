import Image from "next/image"

export interface SpeakerProps {
  name: string
  topic: string
  imageUrl: string
  pos: "left" | "right"
}

const Speaker = ({ name, topic, imageUrl, pos }: SpeakerProps) => {
  return (
    <div className="w-full p-4 basis-full">
      <div
        className={`flex flex-row items-stretch ${
          pos === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="w-48 h-48">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`Image of ${name}`}
              width="192"
              height="192"
              className="rounded-full shadow-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-600 opacity-40 rounded-full shadow-lg relative">
              <span className="text-8xl font-bold absolute top-11 left-[75px] text-gray-200">
                ?
              </span>
            </div>
          )}
        </div>
        <div className={`sm:my-auto space-y-2 mx-4 text-gray-100`}>
          <h4
            className={`font-tommy text-3xl text-left ${
              pos === "right" ? "text-right" : "text-left"
            }`}
          >
            {name}
          </h4>
          <p
            className={`text-2xl ${
              pos === "right" ? "text-right" : "text-left"
            }`}
          >
            {" "}
            {topic}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Speaker
