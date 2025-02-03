import React from "react";
import { FaHtml5 } from "react-icons/fa";

const SkillsCard = ({ skill }) => {
  return (
    <div className="group transition duration-300 ease-in-out flex flex-col items-center gap-2 p-4 rounded-md  bg-base-200 dark:bg-dark-primary-70 shadow-md hover:bg-light-secondary hover:bg-opacity-10 border  dark:hover:bg-dark-primary dark:hover:bg-opacity-20  hover:border-light-primary hover:border-opacity-20 dark:hover:border-dark-primary">
      <div className="w-14 h-14">
        <img
          className="w-full h-full object-cover group-hover:hidden"
          src={skill.image_dark}
          alt=""
        />
        <img
          className="w-full h-full object-cover hidden group-hover:inline-flex"
          src={skill.image}
          alt=""
        />
      </div>
      <p className="text-base md:text-lg font-semibold text-light-color-text dark:group-hover:text-dark-color-text">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillsCard;
