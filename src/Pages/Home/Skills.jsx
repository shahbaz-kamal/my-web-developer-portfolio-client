import React, { useEffect, useState } from "react";
import Title from "../../Component/Title";
import SkillsCard from "./SkillsCard";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <div id="skills" className="w-11/12 md:w-10/12 mx-auto">
      <header>
        <Title title={"My Skills"} subTitle={"Skill Set Overview"}></Title>
      </header>
      <section className="space-y-6 md:space-y-8  ">
        {/* Excelent div*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <Fade triggerOnce={true} cascade={false} direction="up" delay={index*40}>
            <SkillsCard key={index} skill={skill}></SkillsCard></Fade>
          ))}
        </div>

        {/* Exploring div*/}
      </section>
    </div>
  );
};

export default Skills;
