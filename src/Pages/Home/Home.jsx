import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import MyProjects from "./MyProjects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-10">
      <section className="">
        <Banner></Banner>
      </section>
      <section className="px-2 md:px-0">
        <AboutMe></AboutMe>
      </section>
      <section className="max-w-[1320px] mx-auto px-2 md:px-0">
        <Experience></Experience>
      </section>
      <section className="max-w-[1320px] mx-auto px-2 md:px-0">
        <Education></Education>
      </section>
      <section className="max-w-[1320px] mx-auto px-2 md:px-0">
        <Skills></Skills>
      </section>
      <section className="max-w-[1320px] mx-auto px-2 md:px-0">
        <MyProjects></MyProjects>
      </section>
      <section className="max-w-[1320px] mx-auto px-3 ">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
