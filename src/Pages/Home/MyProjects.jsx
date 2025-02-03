import React, { useEffect, useState } from "react";
import Title from "../../Component/Title";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import ProjectCard from "./ProjectCard";
import './ProhectCard.css'

const MyProjects = () => {
  const axiosSecure = UseAxiosSecure();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axiosSecure.get("all-projects").then((res) => setProjects(res.data));
  }, []);
  console.log(projects);
  return (
    <div id="my-project" className=" mx-auto px-3">
      <header>
        <Title title={"My Projects"} subTitle={"A brief summary of the project's objectives, challenges, and outcomes."}></Title>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </section>
    </div>
  );
};

export default MyProjects;
