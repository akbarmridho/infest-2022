import Speaker, { SpeakerProps } from "./Speaker";
import { useState } from "react";
import FAQButton from "./FAQButton";
interface Props {
  speakers: {
    [day: string]: {
      name: string;
      topic: string;
      imageUrl: string;
    }[];
  };
}

const SpeakerDeck = ({ speakers }: Props) => {
  const [activeItems, setActiveItems] = useState<string>(
    Object.keys(speakers)[0]
  );
  return (
    <div className="flex justify-center">
      <div className="w-full mx max-w-screen-md">
        <h2 className="h2 text-center text-gradient mb-4 lg:mb-6">
          Pembicara Kami
        </h2>
        <div className="flex justify-center flex-wrap">
          {Object.keys(speakers).map((key, i) => {
            return (
              <FAQButton
                key={i}
                name={key}
                onClick={() => setActiveItems(key)}
                currentActive={activeItems}
              />
            );
          })}
        </div>
        <div className="mt-6">
          {speakers[activeItems].map((speaker, i) => {
            return (
              <Speaker
                key={`${i}-${activeItems}`}
                name={speaker.name}
                topic={speaker.topic}
                imageUrl={speaker.imageUrl}
                pos={i % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpeakerDeck;
