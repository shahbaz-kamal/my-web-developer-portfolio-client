import React, { useEffect, useState } from "react";
import Title from "../../Component/Title";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  const axiosSecure = UseAxiosSecure();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axiosSecure.get("/all-projects").then((res) => setProjects(res.data));
  }, []);
  console.log(projects);
  return (
    <div id="my-project" className="max-w-[1320px] mx-auto px-3">
      <header>
        <Title title={"My Projects"}></Title>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </section>
    </div>
  );
};

export default MyProjects;
