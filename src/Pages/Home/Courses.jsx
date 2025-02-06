import React from "react";
import Title from "../../Component/Title";
import resultIcon from "../../assets/result.png";
import { CiCalendarDate } from "react-icons/ci";
import { Fade } from "react-awesome-reveal";

const Courses = () => {
  return (
    <div id="course">
      <header className="hidden md:block">
        <Title
          title={"Courses & Certifications"}
          subTitle={"Certifications & Achievements"}
        ></Title>
      </header>
      <header className="md:hidden">
        <Title
          title={"Courses & Certifications"}
          subTitle={" Achievements"}
        ></Title>
      </header>
      <section className="grid md:grid-cols-2 gap-6">
        <Fade triggerOnce={true} direction="left">
          <div className="border-x-2 border-x-light-accent dark:border-x-dark-primary p-2 rounded-lg flex flex-col justify-start">
            <h3 className="font-bold text-xl md:text-2xl text-light-color-text dark:text-dark-color-text">
              Complete Web Development Course
            </h3>
            <p className="text-lg md:text-xl font-semibold text-light-accent dark:text-dark-primary mb-2">
              Programming Hero
            </p>
            <div className="flex flex-col xl:flex-row justify-between mb-2">
              <p className="text-sm md:text-base  text-light-color-text dark:text-dark-color-text flex gap-2 items-center mb-2">
                <span className="text-light-accent dark:text-dark-primary">
                  <CiCalendarDate size={30} />
                </span>
                <div>
                  <p className="text-base md:text-lg">Jun 2024 to Jan 2025</p>
                </div>
              </p>
              <p className="text-sm md:text-base  text-light-color-text dark:text-dark-color-text flex gap-2 items-center mb-2">
                <span className="text-light-accent dark:text-dark-primary">
                  {/* <img src={resultIcon} className="w-8" alt="" /> */}
                  Avg. Assignment Marks:
                </span>
                <div>
                  <p className="text-base md:text-lg">98%</p>
                </div>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/MZ9LksT/html.png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/1zyXkLr/css-3.png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/XkWsbQDL/tailwind.png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/4Mvj996/js.png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/KL6XByh/react.png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/6JyLGWnk/express-color.png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/VQpcJZY/mongoDB.png"
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  className="w-full h-full"
                  src="https://img.icons8.com/?size=30&id=BCUAXURT3JLi&format=png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce={true} direction="right">
          {" "}
          <div className="border-x-2 border-x-light-accent dark:border-x-dark-primary p-2 rounded-lg flex flex-col justify-start">
            <h3 className="font-bold text-xl md:text-2xl text-light-color-text dark:text-dark-color-text">
              Chairmans Award for scholastics Excellence
            </h3>
            <p className="text-lg md:text-xl font-semibold text-light-accent dark:text-dark-primary mb-2">
              Bangabandhu Sheikh Mujibur Rahman Science & Technology University
            </p>
            <div className="flex flex-col xl:flex-row justify-between mb-2">
              <p className="text-sm md:text-base  text-light-color-text dark:text-dark-color-text flex gap-2 items-center mb-2">
                <span className="text-light-accent dark:text-dark-primary">
                  <CiCalendarDate size={30} />
                </span>
                <div>
                  <p className="text-base md:text-lg">January 2019</p>
                </div>
              </p>
            </div>
            <p>
              Received for Securing 3rd Merit Position with a CGPA of 3.77 in
              the 3rd Year, 1st Semester.
            </p>
            {/* <div className="flex flex-wrap gap-2 items-center justify-center">
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/MZ9LksT/html.png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/1zyXkLr/css-3.png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/XkWsbQDL/tailwind.png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/4Mvj996/js.png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/KL6XByh/react.png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/6JyLGWnk/express-color.png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/VQpcJZY/mongoDB.png"
                alt=""
              />
            </div>
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src="https://img.icons8.com/?size=30&id=BCUAXURT3JLi&format=png"
                alt=""
              />
            </div>
          </div> */}
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Courses;
