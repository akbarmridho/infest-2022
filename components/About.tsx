interface Props {
  title: string;
  content: string;
}

const About = ({ title, content }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="w-full mx">
        <h2 className="h2 text-center text-gradient">{title}</h2>
        <p className="h3 text-center mt-6 text-gray-100">{content}</p>
      </div>
    </div>
  );
};

export default About;
