import React from "react";
import Title from "../../Component/Title";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="max-w-[1320px] mx-auto px-2 md:px-8 bg-light-secondary dark:bg-dark-secondary bg-opacity-10 dark:bg-opacity-10 rounded-md shadow-md min-h-screen"
    >
      <div className="p-5 md:p-20">
        <div className="border-2 border-light-primary dark:border-dark-primary border-opacity-10 dark:border-opacity-10  rounded-md">
          <header className="mt-3">
            <Title title={"About Me"}></Title>
          </header>
          <section>
            <p className="px-4 text-light-color-text dark:text-dark-color-text text-base md:text-lg opacity-80">I’m a MERN stack web developer with strong expertise in HTML, CSS, and JavaScript, and a solid grasp of back-end technologies like Node.js, Express.js, and MongoDB. I specialize in building clean, user-focused web solutions that meet clients' goals while staying on time and within budget. Beyond coding, I’m passionate about playing cricket, which enhances my teamwork and strategic thinking skills. Reading books fuels my curiosity and helps me explore new perspectives, while watching movies inspires creativity and storytelling. These activities not only enrich my personal life but also bring a fresh, dynamic approach to my professional work as a developer.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
