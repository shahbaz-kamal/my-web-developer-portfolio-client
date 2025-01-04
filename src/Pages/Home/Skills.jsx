import React, { useEffect, useState } from "react";
import Title from "../../Component/Title";
import SkillsCard from "./SkillsCard";

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
    <div id="skills">
      <header>
        <Title title={"My Skills"}></Title>
      </header>
      <section className="space-y-6 md:space-y-8">
        {/* Excelent div*/}
        <div className="flex flex-col gap-2 md:flex-row justify-around items-center">
          <div>
            <p className="font-bold text-light-primary text-xl md:text-2xl">
              Excellent
            </p>
          </div>
          <div className="flex gap-3">
            {skills.slice(0, 4).map((skill, index) => (
              <SkillsCard key={index} skill={skill}></SkillsCard>
            ))}
          </div>
        </div>
        {/* Exploring div*/}
        <div className="flex flex-col gap-2 md:flex-row justify-around items-center">
          <div>
            <p className="font-bold text-light-primary text-xl md:text-2xl">
              Exploring
            </p>
          </div>
          <div className="flex gap-3">
            {skills.slice(4, 8).map((skill, index) => (
              <SkillsCard key={index} skill={skill}></SkillsCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
