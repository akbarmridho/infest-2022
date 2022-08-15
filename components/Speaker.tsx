import Image from "next/image";

export interface SpeakerProps {
  name: string;
  topic: string;
  imageUrl: string;
  pos: "left" | "right";
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
          <Image
            src={imageUrl}
            alt={`Image of ${name}`}
            width="200"
            height="200"
            className="rounded-full"
          />
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
  );
};

export default Speaker;
