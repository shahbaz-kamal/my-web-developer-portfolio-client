import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import UseAuth from "../Hooks/UseAuth";
import UseMessages from "../Hooks/UseMessages";
import { TiThMenuOutline } from "react-icons/ti";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const { user } = UseAuth();
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about-me",
        "experience",
        "education",
        "skills",
        "my-project",
        "contact",
        "course",
        "service",
      ]; // Add all section IDs here
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is exactly 72px from the top of the viewport
          if (rect.top >= 109 && rect.top <= 110) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll with 72px offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 110, // Subtracting 72px to create offset
        behavior: "smooth", // Smooth scroll
      });
    }
  };
  const navigate = useNavigate();
  const { messageData, refetchMessageData } = UseMessages();
  const filteredMessageData = messageData.filter(
    (message) => message.isRead === false
  );
  const links = (
    <>
      <HashLink
        to="/#home"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("home");
          navigate("/");
        }}
        className={`${
          activeSection === "home"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  py-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  py-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <Fade triggerOnce={true} direction="left">
          <li className="px-2">Home</li>
        </Fade>
      </HashLink>
      <HashLink
        to="#about-me"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("about-me");
          navigate("/");
        }}
        className={`${
          activeSection === "about-me"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
        }`}
      >  <Fade triggerOnce={true} direction="left">
        <li className="px-2">About Me</li></Fade>
      </HashLink>
      <HashLink
        to="#experience"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("experience");
          navigate("/");
        }}
        className={`${
          activeSection === "experience"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
        }`}
      >  <Fade triggerOnce={true} direction="left">
        <li className="px-2">Experience</li></Fade>
      </HashLink>
      <HashLink
        to="/#education"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("education");
          navigate("/");
        }}
        className={`${
          activeSection === "education"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >  <Fade triggerOnce={true} direction="left">
        <li className="px-2">Education</li></Fade>
      </HashLink>
      <HashLink
        to="/#course"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("course");
          navigate("/");
        }}
        className={`${
          activeSection === "course"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >  <Fade triggerOnce={true} direction="down">
        <li className="px-2">Courses</li></Fade>
      </HashLink>
      <HashLink
        to="/#skills"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("skills");
          navigate("/");
        }}
        className={`${
          activeSection === "education"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >  <Fade triggerOnce={true} direction="right">
        <li className="px-2">Skills</li></Fade>
      </HashLink>
      <HashLink
        to="/#my-project"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("my-project");
          navigate("/");
        }}
        className={`${
          activeSection === "my-project"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
        }`}
      >  <Fade triggerOnce={true} direction="right">
        <li className="px-2">Projects</li></Fade>
      </HashLink>
      <HashLink
        to="/#service"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("service");
          navigate("/");
        }}
        className={`${
          activeSection === "service"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
        }`}
      >  <Fade triggerOnce={true} direction="right">
        <li className="px-2">Services</li></Fade>
      </HashLink>
      <HashLink
        to="/#contact"
        onClick={(e) => {
          e.preventDefault(); // Prevent default HashLink behavior
          scrollToSection("contact");
          navigate("/");
        }}
        className={`${
          activeSection === "my-project"
            ? "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary "
            : "text-lg   px-2 hover:bg-light-accent hover:text-light-color-text  p-1 rounded-full border border-light-accent dark:border-dark-secondary text-light-accent font-bold dark:text-dark-color-text dark:hover:bg-dark-secondary"
        }`}
      >  <Fade triggerOnce={true} direction="right">
        <li className="px-2">Contact</li></Fade>
      </HashLink>

      {/* Only for me */}
      {user && user?.email === "shahbazkamal384@gmail.com" ? (
        <NavLink to={"add-project"}>
          <li className="text-white"> Add project</li>
        </NavLink>
      ) : (
        ""
      )}
      {user && user?.email === "shahbazkamal384@gmail.com" ? (
        <NavLink to={"/message"}>
          <li className="text-white">
            {" "}
            Message ({`${filteredMessageData.length}`})
          </li>
        </NavLink>
      ) : (
        ""
      )}
    </>
  );

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      document.body.classList.add("dark:bg-dark-background");
    } else {
      html.classList.remove("dark");
      document.body.classList.remove("dark:bg-dark-background");
    }
  }, [isDarkMode]);

  //   download functionality
  const downloadRef = useRef();

  const handleDownload = () => {
    downloadRef.current.click(); // Trigger the download link click
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto navbar md:px-5 ">
      <div className="navbar-start inline-flex">
        <div className="dropdown 2xl:flex">
          <div tabIndex={0} role="button" className="btn btn-ghost 2xl:hidden">
            <div className="  text-light-primary dark:text-dark-primary ">
              <TiThMenuOutline size={25} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 dark:bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
          >
            {links}
          </ul>
        </div>
        <div className="w-14">
          <Fade triggerOnce={true} direction="left">
            <img
              className="w-full h-full object-cover rounded-full"
              src={logo}
              alt=""
            />
          </Fade>
        </div>
      </div>
      <div className="navbar-center hidden 2xl:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>

      <div className="navbar-end flex-grow gap-3">
        {" "}
        <Fade triggerOnce={true} direction="right">
          <label className="flex cursor-pointer gap-2 items-center">
            <span className="label-text text-light-color-text dark:text-dark-color-text transition ease-in-out duration-300">
              <span className="hidden md:hidden text-light-accent dark:text-dark-color-text">
                Light
              </span>
              <span className="hidden">
                <CiLight size={25} />
              </span>
            </span>
            <input
              onChange={(e) => setIsDarkMode(!isDarkMode)}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller text-light-primary  dark:text-dark-primary"
            />
            <span className="label-text text-dark-primary dark:text-dark-color-text transition ease-in-out duration-300">
              <span className="hidden md:hidden font-semibold ">dark</span>
              <span className="hidden">
                <CiDark size={25} />
              </span>
            </span>
          </label>
        </Fade>
        <Fade triggerOnce={true} direction="right">
          <button
            onClick={handleDownload}
            className="text-sm md:text-xl flex items-center gap-2 py-2 px-3 rounded-full bg-light-accent  hover:bg-light-primary hover:text-white text-light-color-text dark:bg-dark-primary dark:hover:bg-dark-accent dark:hover:text-dark-color-text  transition ease-in-out duration-300 "
          >
            Resume <FaDownload />
            <a
              href="/resume.pdf"
              download="Shahbaz_Resume.pdf"
              ref={downloadRef}
              style={{ display: "none" }}
            />
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Navbar;
