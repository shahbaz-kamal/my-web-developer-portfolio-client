import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaCog,
  FaGlobe,
  FaHandsHelping,
  FaLock,
  FaPaintBrush,
  FaShoppingCart,
  FaStar,
  FaSyncAlt,
  FaWrench,
} from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import Title from "../../Component/Title";
import { MdMonitor } from "react-icons/md";

const Services = () => {
  return (
    <div id="service">
      <header>
        <Title
          title={"My services"}
          subTitle={"Enhance Your business with My Premium Services"}
        ></Title>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {/* services card */}
        <Fade duration={1200} direction="right" triggerOnce={true}>
          {/*  Custom Web Application Development */}
          <div className="h-full flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <MdMonitor size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              Custom Web Application Development
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Tailored web applications designed to meet your specific business
              needs and objectives.
            </p>
          </div>
          {/*  Front-End Development */}
          <div className="h-full flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <FaPaintBrush size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              Front-End Development
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Turn your design concepts into interactive, responsive websites
              using Figma-to-HTML workflows and React for dynamic, modern web
              experiences.
            </p>
          </div>
          {/* Full-stack Development */}
          <div className="h-full  flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <FaSyncAlt size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              Full-stack Development
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Complete web development services, from front-end interfaces to
              back-end servers and databases.
            </p>
          </div>
          {/*Single Page Application (SPA) Development */}
          <div className="h-full  flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <FaGlobe size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              Single Page Application (SPA) Development
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Build seamless, fast-loading, dynamic single-page applications
              that offer a smooth user experience.
            </p>
          </div>
        </Fade>

        {/* services card */}
        <Fade duration={1200} direction="left" triggerOnce={true}>
          {/*E-commerce Website Development*/}
          <div className="h-full  flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <FaShoppingCart size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              E-commerce Website Development
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Develop scalable and secure e-commerce platforms with
              user-friendly shopping experiences.
            </p>
          </div>
          {/*Authentication and Authorization*/}
          <div className="h-full  flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <FaLock size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              Authentication and Authorization
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Implement secure user authentication and authorization systems to
              protect your web applications.
            </p>
          </div>
          {/*Maintenance and Updates*/}
          <div className="h-full  flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <FaWrench size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              Maintenance and Updates
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Ensure the ongoing performance and security of your web
              applications through regular maintenance and updates.
            </p>
          </div>
          {/*Other*/}
          <div className="h-full  flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-20 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
            <div className="text-light-accent dark:text-dark-primary">
              <FaCog size={35} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
              Other
            </h3>
            <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
              Custom solutions for any specific needs or unique challenges you
              might have.
            </p>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Services;
