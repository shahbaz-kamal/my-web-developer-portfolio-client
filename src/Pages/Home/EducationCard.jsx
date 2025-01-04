import React from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import resultIcon from '../../assets/result.png'

const EducationCard = ({ degree, institution, timeline, gpa }) => {
  return (
    <div className="border-x-2 border-x-light-accent dark:border-x-dark-primary p-2 rounded-lg flex flex-col justify-start">
      <h3 className="font-bold text-xl md:text-2xl text-light-color-text dark:text-dark-color-text">
        {degree}
      </h3>
      <p className="text-lg md:text-xl font-semibold text-light-accent dark:text-dark-primary mb-2">
        {institution}
      </p>
      <div className="flex justify-between">
      
        <p className="text-sm md:text-base  text-light-color-text dark:text-dark-color-text flex gap-2 items-center mb-2">
          <span className="text-light-accent dark:text-dark-primary">
            <CiCalendarDate size={30} />
          </span>
          <div>
            <p className="text-base md:text-lg">{timeline}</p>
          </div>
        </p>
        <p className="text-sm md:text-base  text-light-color-text dark:text-dark-color-text flex gap-2 items-center mb-2">
          <span className="text-light-accent dark:text-dark-primary">
         <img src={resultIcon} className="w-8" alt="" />
          </span>
          <div>
            <p className="text-base md:text-lg">{gpa}</p>
          </div>
        </p>
   
      </div>
    </div>
  );
};

export default EducationCard;
