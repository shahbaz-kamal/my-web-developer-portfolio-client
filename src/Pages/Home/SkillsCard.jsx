import React from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-md bg-light-secondary bg-opacity-10 dark:bg-dark-primary dark:bg-opacity-20">
      <div className="w-14 ">
        <img className="w-full h-full object-cover" src={skill.image} alt="" />
      </div>
      <p className="text-base md:text-lg font-semibold text-light-color-text dark:text-dark-color-text">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillsCard;
