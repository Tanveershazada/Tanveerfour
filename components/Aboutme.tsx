import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />}/>
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a web developer with 3 years of experience in react. a highly
          skilled web developer with a robust three-year background in React. My
          journey has been marked by proficiency in crafting dynamic and
          responsive user interfaces, leveraging the power of React to enhance
          user experiences. From designing interactive components to optimizing
          performance, my expertise extends across the entire development
          lifecycle. Passionate about staying abreast of industry trends, I
          bring a commitment to innovation and a proven track record of
          delivering high-quality, scalable solutions. With a keen eye for
          detail and a dedication to excellence, I consistently contribute to
          creating engaging and cutting-edge web applications.
        </p>
        <p>
          My proficiency extends to state management, component-based
          architecture, and integrating third-party libraries, ensuring seamless
          and efficient applications. I thrive on challenges, consistently
          delivering impactful solutions that exceed client expectations.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
