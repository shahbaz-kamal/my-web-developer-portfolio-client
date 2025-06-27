import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import MyProjects from "./MyProjects";
import Contact from "./Contact";
import Courses from "./Courses";
import Services from "./Services";

const Home = () => {
  return (
    <div className="space-y-8 md:space-y-10 lg:space-y-14">
      <section className="">
        <Banner></Banner>
      </section>
      <section className=" px-2 md:px-0">
        <AboutMe></AboutMe>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto px-2 md:px-0">
        <Experience></Experience>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto px-2 md:px-0">
        <Education></Education>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto px-2 md:px-0">
       <Courses></Courses>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto px-2 md:px-0">
        <Skills></Skills>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto px-2 md:px-0">
        <MyProjects></MyProjects>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto px-2 md:px-0">
      <Services></Services>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto px-3 ">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
