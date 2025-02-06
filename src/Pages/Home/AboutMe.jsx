import React from "react";
import Title from "../../Component/Title";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="w-11/12 md:w-10/12 mx-auto  bg-light-secondary dark:bg-dark-secondary bg-opacity-10 dark:bg-opacity-10 rounded-md shadow-md "
    >
      <div className="p-6 md:p-10">
        <div className="py-6 border-2 border-light-primary dark:border-dark-primary border-opacity-10 dark:border-opacity-10  rounded-md">
          <header className="hidden md:block">
            <Title
              title={"About Me"}
              subTitle={"A Glimpse Into My Journey"}
            ></Title>
          </header>
          <header className="md:hidden">
            <Title
              title={"About Me"}
              subTitle={"My Journey"}
            ></Title>
          </header>
          <section>
            <ul className="px-4 text-light-color-text dark:text-dark-color-text text-base md:text-lg opacity-80 flex flex-col gap-2">
              <li>
                <span className="font-semibold">From C++ to JavaScript: </span>
                My programming journey began in HSC first year (equivalent to A
                Level) with <strong>C++</strong> , which I found fascinating.
                However, pursuing a degree in Electrical and Electronic
                Engineering (EEE) kept me from fully committing to coding.
                Later, when I rediscovered programming with{" "}
                <strong>javascript</strong>, I decided to pursue it as a career
                and never looked back.
              </li>
              <li>
                <span className="font-semibold">
                  Expertise in MERN Stack Development :{" "}
                </span>
                Now, as a <strong>MERN stack web developer</strong>, I
                specialize in building full-stack applications using HTML, CSS,
                JavaScript, Node.js, Express.js, and MongoDB. With these
                technologies, I focus on creating scalable, efficient, and
                user-centered web solutions. I enjoy diving deep into the
                complexities of both front-end and back-end development, whether
                it’s designing responsive, dynamic interfaces or optimizing
                server-side performance. My goal is to deliver seamless,
                intuitive digital experiences that meet clients' needs and
                exceed user expectations, all while maintaining high standards
                of code quality and performance.
              </li>
              <li>
                <span className="font-semibold">Hobbies & Passions : </span>
                Beyond coding, cricket has taught me teamwork and strategy,
                while reading books expands my knowledge and watching movies
                fuels my creativity. I’m always eager to learn, tackle new
                challenges, and build impactful solutions in web development.
              </li>
            </ul>

            {/* <p className="px-4 text-light-color-text dark:text-dark-color-text text-base md:text-lg opacity-80">
              My programming journey began in intermediate first year with C++,
              which I found fascinating. However, pursuing a degree in
              Electrical and Electronic Engineering (EEE) kept me from fully
              committing to coding. Later, when I rediscovered programming with
              javascript, I decided to pursue it as a career and never looked
              back.
            </p> */}
            {/* <p className="px-4 text-light-color-text dark:text-dark-color-text text-base md:text-lg opacity-80">
              I’m a MERN stack web developer with strong expertise in HTML, CSS,
              and JavaScript, and a solid grasp of back-end technologies like
              Node.js, Express.js, and MongoDB. I specialize in building clean,
              user-focused web solutions that meet clients' goals while staying
              on time and within budget. Beyond coding, I’m passionate about
              playing cricket, which enhances my teamwork and strategic thinking
              skills. Reading books fuels my curiosity and helps me explore new
              perspectives, while watching movies inspires creativity and
              storytelling. These activities not only enrich my personal life
              but also bring a fresh, dynamic approach to my professional work
              as a developer.
            </p> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
