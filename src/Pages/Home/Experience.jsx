import React from "react";
import Title from "../../Component/Title";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div>
      <header>
        <Title title={"Work Experience"}></Title>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <ExperienceCard
          designation={"Data Artist"}
          companyName={"Adiva Graphics"}
          from={"February 2024"}
          to={"Oct 2024"}
          location={"House:71, Road:8, Baridhara DOHS, Dhaka, Bangladesh"}
          details={
            'I worked extensively with Microsoft PowerPoint and Excel to create data-driven charts and presentations, ensuring accurate data output to meet project objectives. I was responsible for analyzing and visualizing data in various chart formats and integrating them into PowerPoint slides. Additionally, I conducted quality control on online surveys, ensuring that survey logic and questionnaires were aligned with the client’s research objectives, contributing to the overall success of the projects.'
          }
        ></ExperienceCard>
        <ExperienceCard
          designation={"Adjunct Lecturer"}
          companyName={"College of Aviation Technology"}
          from={"March 2022"}
          to={"Oct 2022"}
          details={
            'I worked as an adjunct lecturer in the Aeronautical and Aviation Science department, where I taught courses on Electrical Circuits, Electrical Machines, and Digital Electronics. My role involved preparing and delivering lectures, creating course materials, and guiding students through complex theoretical and practical concepts. I also provided academic support to students, ensuring they developed a strong understanding of core topics and were able to apply their knowledge effectively in real-world scenarios.'
          }
          location={"Sector:13, Plot:22, Uttara, Dhaka, Bangladesh"}
        ></ExperienceCard>
      </section>
    </div>
  );
};

export default Experience;
