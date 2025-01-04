import React from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";

const ExperienceCard = ({
  designation,
  companyName,
  from,
  to,
  details,
  location,
}) => {
  return (
    <div className="border-x-2 border-x-light-accent dark:border-x-dark-primary p-2 rounded-lg flex flex-col justify-start">
      <h3 className="font-bold text-xl md:text-2xl text-light-color-text dark:text-dark-color-text">
        {designation}
      </h3>
      <p className="text-lg md:text-xl font-semibold text-light-accent dark:text-dark-primary mb-2">
        {companyName}
      </p>
      <p className="text-base md:text-lg  text-light-color-text dark:text-dark-color-text flex gap-2 items-center mb-2">
        <span className="text-light-accent dark:text-dark-primary">
          <CiCalendarDate />
        </span>
        <div>
          <span>{from}</span> - <span>{to}</span>
        </div>
      </p>
      <p className="text-base md:text-lg  text-light-color-text dark:text-dark-color-text flex gap-2 items-center mb-2">
        <span className="text-light-accent dark:text-dark-primary">
          <CiLocationOn />
        </span>
        <div>{location}</div>
      </p>
      <p className="text-sm md:text-base text-light-color-text dark:text-dark-color-text">
        {details}
      </p>
    </div>
  );
};

export default ExperienceCard;
