import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import UseAuth from "../Hooks/UseAuth";

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
            ? "text-base bg-light-accent hover:bg-light-accent hover:text-dark-color-text dark:bg-dark-primary dark:hover:bg-dark-secondary  px-2 transition duration-300 ease-in-out"
            : "text-base bg-neutral text-white px-2 hover:bg-light-accent hover:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <li>Home</li>
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
            ? "text-base bg-light-accent hover:bg-light-accent hover:text-dark-color-text dark:bg-dark-primary dark:hover:bg-dark-secondary  px-2 transition duration-300 ease-in-out"
            : "text-base bg-neutral text-white px-2 hover:bg-light-accent hover:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <li>About Me</li>
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
            ? "text-base bg-light-accent hover:bg-light-accent hover:text-dark-color-text dark:bg-dark-primary dark:hover:bg-dark-secondary  px-2 transition duration-300 ease-in-out"
            : "text-base bg-neutral text-white px-2 hover:bg-light-accent hover:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <li>Experience</li>
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
            ? "text-base bg-light-accent hover:bg-light-accent hover:text-dark-color-text dark:bg-dark-primary dark:hover:bg-dark-secondary  px-2 transition duration-300 ease-in-out"
            : "text-base bg-neutral text-white px-2 hover:bg-light-accent hover:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <li>Education</li>
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
            ? "text-base bg-light-accent hover:bg-light-accent hover:text-dark-color-text dark:bg-dark-primary dark:hover:bg-dark-secondary  px-2 transition duration-300 ease-in-out"
            : "text-base bg-neutral text-white px-2 hover:bg-light-accent hover:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <li>Skills</li>
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
            ? "text-base bg-light-accent hover:bg-light-accent hover:text-dark-color-text dark:bg-dark-primary dark:hover:bg-dark-secondary  px-2 transition duration-300 ease-in-out"
            : "text-base bg-neutral text-white px-2 hover:bg-light-accent hover:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <li>Projects</li>
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
            ? "text-base bg-light-accent hover:bg-light-accent hover:text-dark-color-text dark:bg-dark-primary dark:hover:bg-dark-secondary  px-2 transition duration-300 ease-in-out"
            : "text-base bg-neutral text-white px-2 hover:bg-light-accent hover:text-dark-color-text dark:hover:bg-dark-secondary "
        }`}
      >
        <li>Contact</li>
      </HashLink>

      {/* Only for me */}
      {user && user?.email === "shahbazkamal384@gmail.com" ? (
        <NavLink to={"add-project"}>
          <li className="text-white"> Add project</li>
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
    <div className="w-11/12 md:w-10/12 mx-auto navbar   md:px-5 ">
      <div className="navbar-start inline-flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="w-14">
          <img
            className="w-full h-full object-cover rounded-full"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="navbar-end flex-groq gap-3">
        <label className="flex cursor-pointer gap-2 items-center">
          <span className="label-text text-light-color-text dark:text-dark-color-text transition ease-in-out duration-300">
            <span className="hidden md:inline-flex text-dark-color-text">
              {" "}
              Light
            </span>
            <span className="md:hidden">
              <CiLight size={25} />
            </span>
          </span>
          <input
            onChange={(e) => setIsDarkMode(!isDarkMode)}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller text-light-primary dark:text-dark-primary"
          />
          <span className="label-text text-light-color-text dark:text-dark-color-text transition ease-in-out duration-300">
            <span className="hidden md:inline-flex text-dark-color-text">
              {" "}
              dark
            </span>
            <span className="md:hidden">
              <CiDark size={25} />
            </span>
          </span>
        </label>
        <button
          onClick={handleDownload}
          className="text-sm md:text-xl flex items-center gap-2 py-2 px-3 rounded-full bg-light-accent  hover:bg-light-primary hover:text-white text-light-color-text dark:bg-dark-primary dark:hover:bg-dark-accent dark:hover:text-dark-color-text  transition ease-in-out duration-300 "
        >
        Resume <FaDownload />
          {/* Hidden anchor tag to trigger the download */}
          <a
            href="/resume.pdf" // Path to your resume file
            download="Shahbaz_Resume.pdf" // Optional: specify the filename
            ref={downloadRef} // Using the ref to trigger the download
            style={{ display: "none" }} // Hide the anchor tag
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
