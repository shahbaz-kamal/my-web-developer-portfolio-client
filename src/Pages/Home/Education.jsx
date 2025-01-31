import React from "react";
import Title from "../../Component/Title";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div id="education">
      <header>
        <Title title={"Education"} subTitle={"My Academic Path"}></Title>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <EducationCard
          degree="M.Sc.(Engg.) in Electrical & Electronic Engineering"
          institution={"Bangladesh University of Engineering and Technology"}
          timeline={"2021-Present"}
          gpa={"3.50"}
        ></EducationCard>
        <EducationCard
          degree="B.Sc. in Electrical & Electronic Engineering"
          institution={
            "Bangabandhu Sheikh Mujibur Rahman Science & Technology University"
          }
          timeline={"2016-2019"}
          gpa={"3.50"}
        ></EducationCard>
        <EducationCard
          degree="Higher Secondary School Certificate"
          institution={"Birshreshtha Munshi Abdur Rouf Public College"}
          timeline={"2015"}
          gpa={"5.00"}
        ></EducationCard>
        <EducationCard
          degree="Secondary School Certificate"
          institution={"Hasan Ali Govt. High School"}
          timeline={"2013"}
          gpa={"5.00"}
        ></EducationCard>
      </section>
    </div>
  );
};

export default Education;
