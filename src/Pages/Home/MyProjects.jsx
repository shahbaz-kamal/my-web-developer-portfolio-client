import React, { useEffect, useState } from "react";
import Title from "../../Component/Title";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

const MyProjects = () => {
  const axiosSecure = UseAxiosSecure();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axiosSecure.get("all-projects").then((res) => setProjects(res.data));
  }, []);
  console.log(projects);
  return (
    <div id="my-project" className=" mx-auto px-3">
      <header className="hidden md:block">
        <Title
          title={"My Projects"}
          subTitle={"Project Scopes, Challenges, and Results"}
        ></Title>
      </header>
      <header className="md:hidden">
        <Title title={"My Projects"} subTitle={"Project Overview"}></Title>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Fade
            triggerOnce={true}
            cascade={false}
            duration={index * 400}
            direction="right"
          >
            <ProjectCard key={project._id} project={project}></ProjectCard>
          </Fade>
        ))}
      </section>
    </div>
  );
};

export default MyProjects;
