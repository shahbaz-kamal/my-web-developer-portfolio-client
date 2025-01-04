import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Experience from "./Experience";

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
    </div>
  );
};

export default Home;
