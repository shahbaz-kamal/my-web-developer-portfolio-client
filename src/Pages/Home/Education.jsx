import React from "react";
import Title from "../../Component/Title";
import EducationCard from "./EducationCard";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div id="education">
      <header>
        <Title title={"Education"} subTitle={"My Academic Path"}></Title>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Fade triggerOnce={true} direction="left">
          <EducationCard
            degree="M.Sc.(Engg.) in Electrical & Electronic Engineering"
            institution={"Bangladesh University of Engineering and Technology"}
            timeline={"2021-Present"}
            gpa={"3.50"}
          ></EducationCard>
        </Fade>
        <Fade triggerOnce={true} direction="right">
          <EducationCard
            degree="B.Sc. in Electrical & Electronic Engineering"
            institution={
              "Gopalganj Science & Technology University"
            }
            timeline={"2016-2019"}
            gpa={"3.50"}
          ></EducationCard>{" "}
        </Fade>{" "}
        <Fade triggerOnce={true} direction="left">
          <EducationCard
            degree="Higher Secondary School Certificate"
            institution={"Birshreshtha Munshi Abdur Rouf Public College"}
            timeline={"2015"}
            gpa={"5.00"}
          ></EducationCard>
        </Fade>
        <Fade triggerOnce={true} direction="right">
         
          <EducationCard
            degree="Secondary School Certificate"
            institution={"Hasan Ali Govt. High School"}
            timeline={"2013"}
            gpa={"5.00"}
          ></EducationCard>
        </Fade>
      </section>
    </div>
  );
};

export default Education;
