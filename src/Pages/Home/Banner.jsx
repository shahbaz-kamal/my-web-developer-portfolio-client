import React, { useRef } from "react";
import "./Banner.css";
import shahbazImage from "../../assets/shahbaz.png";
import shahbazImageSmall from "../../assets/shahbaz_small.png";

import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  const downloadRef = useRef();
  const handleDownload = () => {
    downloadRef.current.click(); // Trigger the download link click
  };
  return (
    <div id="home" className="banner bg-black bg-opacity-60 w-full">
      <div className="w-11/12 md:w-10/12 mx-auto  px-2 md:px-8   flex xl:gap-14 items-center">
          <div className="hidden xl:flex flex-col  gap-2">
        <Fade triggerOnce={true} cascade damping={0.2}>
            <a
              href="https://github.com/shahbaz-kamal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaGithub
                  className="text-light-accent dark:text-dark-primary"
                  size={30}
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahbaz-kamal-chowdhury/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full">
                <FaLinkedin
                  className="text-light-accent dark:text-dark-primary"
                  size={30}
                />
              </div>
            </a>
            <a
              href="https://x.com/tamim120096"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full">
                <FaXTwitter
                  className="text-light-accent dark:text-dark-primary"
                  size={30}
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/tamim.chowdhury.543/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full">
                <FaFacebook
                  className="text-light-accent dark:text-dark-primary"
                  size={30}
                />
              </div>
            </a>
        </Fade>
          </div>

        <div className="flex flex-col-reverse xl:flex-row  xl:justify-between xl:flex-grow items-center gap-4  w-full ">
          <Fade triggerOnce={true} direction="left">
            <div className="  xl:py-40 flex flex-col items-center  xl:items-start gap-2 mx-auto xl:mx-0 ">
              <h1 className="text-dark-color-text text-xl md:text-3xl  font-semibold ">
                Hello, <span className="text-dark-color-text">I'm</span>
              </h1>
              <h3 className=" text-transparent bg-clip-text bg-gradient-to-r from-light-accent to-light-primary dark:from-dark-accent dark:to-dark-primary text-3xl md:text-[34px] lg:text-[40px] font-cinzel font-bold text-center lg:text-start ">
                Md. Shahbaz Kamal Chowdhury
              </h3>
              <p className="text-dark-color-text text-2xl md:text-[32px] lg:text-4xl font-cinzel mb-3">
                MERN Stack Web Developer
              </p>
              <p className="max-w-[500px] text-dark-color-text mb-4 text-center lg:text-start">
                A passionate web developer skilled in HTML, CSS, JavaScript, and
                the MERN stack. I create responsive web apps focused on user
                experience and business goals. Let's build something great!
              </p>
              <button
                onClick={handleDownload}
                className="relative text-lg md:text-xl flex items-center gap-2 pl-3 rounded-full text-dark-color-text  dark:hover:text-light-color-text transition ease-in-out duration-300 border border-light-accent dark:border-dark-primary group overflow-hidden"
              >
                {/* Background Animation */}
                <span className="absolute inset-0 bg-light-accent dark:bg-dark-primary transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

                {/* Button Content */}
                <span className="relative z-10">Download Resume</span>
                <span className="relative z-10 bg-light-accent dark:bg-dark-primary rounded-full p-3 border-2 border-light-accent dark:border-dark-primary flex items-center justify-center">
                  <FaDownload />
                </span>
                <a
                  href="/resume.pdf" // Path to your resume file
                  download="Shahbaz_Resume.pdf" // Optional: specify the filename
                  ref={downloadRef} // Using the ref to trigger the download
                  style={{ display: "none" }} // Hide the anchor tag
                />
              </button>
              <div className="flex xl:hidden mt-4 mb-14  gap-3">
                <Fade triggerOnce={true} cascade damping={0.1}>
                <a
                  href="https://github.com/shahbaz-kamal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub
                      className="text-light-accent dark:text-dark-primary"
                      size={30}
                    />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-shahbaz-kamal-chowdhury/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full">
                    <FaLinkedin
                      className="text-light-accent dark:text-dark-primary"
                      size={30}
                    />
                  </div>
                </a>
                <a
                  href="https://x.com/tamim120096"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full">
                    <FaXTwitter
                      className="text-light-accent dark:text-dark-primary"
                      size={30}
                    />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/tamim.chowdhury.543/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full">
                    <FaFacebook
                      className="text-light-accent dark:text-dark-primary"
                      size={30}
                    />
                  </div>
                </a></Fade>
              </div>
            </div>
          </Fade >
          <div className="hidden xl:inline-flex xl:self-end xl:rounded-none  xl:h-[500px] ">
            <Fade direction="right" triggerOnce={true}>
              <img
                className="h-full w-full object-cover"
                src={shahbazImage}
                alt=""
              />
            </Fade>
          </div>
          {/* Rounded Image */}
            <Fade direction="right" triggerOnce={true}>
          <div className="mt-32 xl:hidden border-4 border-neutral  bg-[#a2d8d8] rounded-full w-80 h-80 px-2">
          
              <img
                className="rounded-full h-full w-full  object-cover "
                src={shahbazImageSmall}
                alt=""
              />
          </div>
            </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
