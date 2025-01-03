import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"#about-me"}>
        <li>About Me</li>
      </NavLink>
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

  return (
    <div className="navbar  md:px-5">
      <div className="navbar-start">
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
      <div className="navbar-end gap-3">
        <label className="flex cursor-pointer gap-2 items-center">
          <span className="label-text text-light-color-text dark:text-dark-color-text transition ease-in-out duration-300">
            Light
          </span>
          <input
            onChange={(e) => setIsDarkMode(!isDarkMode)}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller text-light-primary dark:text-dark-primary"
          />
          <span className="label-text text-light-color-text dark:text-dark-color-text transition ease-in-out duration-300">
            Dark
          </span>
        </label>
        <button className="text-lg md:text-xl flex items-center gap-2 py-2 px-3 rounded-full bg-light-accent  hover:bg-light-primary hover:text-white text-light-color-text dark:bg-dark-primary dark:hover:bg-dark-accent dark:hover:text-dark-color-text  transition ease-in-out duration-300 ">
          Download Resume <FaDownload />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
