import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillInput from "./SkillInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
      <SkillInput title="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
         <SkillInput title="Reactjs" link="https://react.dev/"/>
         <SkillInput title="Nextjs" link="https://nextjs.org/"/>
         <SkillInput title="Nodejs" link="https://nodejs.org/en"/>
         <SkillInput title="TypeScript" link="https://www.typescriptlang.org/"/>
         <SkillInput title="Expressjs" link="https://expressjs.com/"/>
         <SkillInput title="Redux Toolkit" link="https://redux-toolkit.js.org/"/>
         <SkillInput title="MongoDB" link="https://www.mongodb.com/"/>
         <SkillInput title="Google Firebase" link="https://firebase.google.com/"/>
         <SkillInput title="Tailwind Css" link="https://tailwindcss.com/docs/"/>
         <SkillInput title="Sanity.io" link="https://www.sanity.io/"/>
         <SkillInput title="HtML5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"/>
         <SkillInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
         <SkillInput title="Vs Code" link="https://code.visualstudio.com/docs"/>
         <SkillInput title="Atom" link="https://www.accesstomemory.org/en/docs/"/>
         <SkillInput title="Git" link="https://git-scm.com/doc"/>
         <SkillInput title="Github" link="https://docs.github.com/en"/>
         <SkillInput title="Trello" link="https://support.atlassian.com/trello/docs/trello-api-documentation/"></SkillInput>
         <SkillInput title="GitKraken" link="https://www.gitkraken.com/"/>
         <SkillInput title="Figma" link="https://help.figma.com/hc/en-us"/>
         <SkillInput title="Canva" link="https://www.canva.com/docs/"/>
         <SkillInput title="Adobe Illustrator" link="https://www.adobe.com/products/illustrator/free-trial-download.html"/>
         <SkillInput title="Brand & Logo Design" link="https://dribble.com/"/>
         <SkillInput title="Website Design" link="https://themeforest.net/"/>
         <SkillInput title="Vercel" link="https://vercel.com/"/>
         <SkillInput title="UI Design" link="https:/uidesign.doc.com/"/>
         <SkillInput title="Netllify" link="https://www.netlify.com/"/>
      </div>
    </div>
  );
};

export default Skills;
