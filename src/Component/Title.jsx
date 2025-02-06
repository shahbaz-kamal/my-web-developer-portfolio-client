import React from "react";
import { Fade } from "react-awesome-reveal";

const Title = ({ title, subTitle }) => {
  return (
    <div className="font-cinzel flex flex-col items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
      <Fade triggerOnce={true} direction="right">
        <h3 className=" text-2xl md:text-4xl font-bold  text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-light-accent to-light-primary dark:from-dark-accent dark:to-dark-primary">
          {title}
        </h3>
      </Fade>
      <Fade triggerOnce={true} direction="left">
        <p className="text-xl md:text-2xl font-medium italic text-light-color-text dark:text-dark-color-text">
          --- {subTitle} ---
        </p>
      </Fade>
    </div>
  );
};

export default Title;
