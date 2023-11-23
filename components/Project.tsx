import Title from "./Title";
import { FaProjectDiagram } from "react-icons/fa";
import portfolio from "../public/images/picture1.png";
import fitclub from "../public/images/picture2.png";
import burger from "../public/images/picture3.png";
import Tea from "../public/images/picture4.png";
import State from "../public/images/picture5.png";
import Travel from "../public/images/picture6.png";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          img={portfolio.src}
          title="Portfolio"
          link="https://tanveerportfolio.vercel.app/"
        />

        <ProjectCard
          img={fitclub.src}
          title="Fit Club"
          link="https://fitclubjim.netlify.app"
        />

        <ProjectCard
          img={burger.src}
          title="Food & Restaurant"
          link="https://shamilawebsite.netlify.app"
        />

        <ProjectCard
          img={Tea.src}
          title="Coffero"
          link="https://gleaming-gaufre-a44f51.netlify.app"
        />

        <ProjectCard
          img={State.src}
          title="Real State"
          link="https://real-estatesham.netlify.app"
        />

        <ProjectCard
          img={Travel.src}
          title="Travel Agency"
          link="https://tour-sitesham.netlify.app"
        />
      </div>
    </div>
  );
};

export default Project;
