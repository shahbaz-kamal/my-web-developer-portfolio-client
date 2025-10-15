import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./ViewDetails.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Title from "../../Component/Title";

import { format } from "date-fns";

// import "swiper/css/effect-cards";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-awesome-reveal";

const ViewDetails = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`view-details/${id}`).then((res) => setProject(res.data));
  }, []);
  //   console.log(project);

  const {
    _id,
    projectTitle,
    projectDescription,
    imageAndDescriptions,
    liveLink,
    clientGitRepo,
    serverGitRepo,
    challenges,
    improvements,
    publicationDate,
    features,
    technologyUsed,
  } = project;
  console.log(technologyUsed);

  console.log(imageAndDescriptions);
  return (
    <div className="pt-32 w-11/12 md:w-10/12 mx-auto">
      <header>
        <Title title={"Project Details"} subTitle={projectTitle}></Title>
      </header>
      <section className="flex flex-col gap-6 p-4 bg-base-200 dark:bg-dark-primary-20 rounded-lg">
        {/* Images */}
        <div className="rounded-lg flex items-center justify-center overflow-hidden  mx-auto px-6">
          <Swiper
            effect={"coverflow"}
            // lazy={false}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 50,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              // Pause autoplay on hover
              swiper.el.addEventListener("mouseenter", () =>
                swiper.autoplay.stop()
              );
              swiper.el.addEventListener("mouseleave", () =>
                swiper.autoplay.start()
              );
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {imageAndDescriptions
              ? imageAndDescriptions.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="relative ">
                      <img className="rounded-lg  " src={item.url} alt="" />
                      <div className="absolute left-1/2  bottom-0 transform -translate-x-1/2 text-center text-dark-color-text bg-black   bg-opacity-50  px-2 py-1  w-full hidden md:block">
                        <span className="font-bold text-sm md:text-base lg:text-lg ">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : ""}
          </Swiper>
        </div>

        <div className="px-6 pb-6 w-full">
          <Fade triggerOnce={true} direction="left">
            <h2 className=" text-center text-light-color-text dark:text-dark-color-text text-lg md:text-4xl mb-2 md:mb-3 font-bold ">
              {projectTitle}
            </h2>
          </Fade>{" "}
          <Fade triggerOnce={true} direction="right">
            <p className=" text-light-color-text dark:text-dark-color-text text base md:text-lg mb-3 md:mb-6">
              {projectDescription}
            </p>
          </Fade>{" "}
          <Fade triggerOnce={true} direction="left">
            <div className="w-full flex flex-col lg:flex-row gap-3 mb-3 md:mb-6">
              <div className="flex items-center gap-3 w-full justify-center flex-wrap md:flex-nowrap">
                <div>
                  <a href={liveLink} target="_blank">
                    <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-secondary hover:border-light-secondary  dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
                      Live Link
                    </button>
                  </a>
                </div>
                <div>
                  <a href={clientGitRepo} target="_blank">
                    <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-secondary hover:border-light-secondary  dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
                      Git Client
                    </button>
                  </a>
                </div>
                {serverGitRepo && (
                  <div>
                    <a href={serverGitRepo} target="_blank">
                      <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-secondary hover:border-light-secondary  dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
                        Git Server
                      </button>
                    </a>
                  </div>
                )}

                <div>
                  <p className="">
                    <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1">
                      Publication Date:
                    </span>
                    <span className=" text-light-primary dark:text-dark-primary">
                      {/* {format(new Date(publicationDate), "PPP")} */}{" "}
                      {publicationDate
                        ? format(new Date(publicationDate), "PP")
                        : "N/A"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          {/* technology */}
          {technologyUsed && (
            <div className="mb-2 md:mb-6">
              <Fade triggerOnce={true} direction="left">
                <h3 className="flex items-center justify-center gap-2 text-center text-light-color-text dark:text-dark-color-text text-lg md:text-3xl  mb-2 font-bold  md:mb-3">
                  {/* <img
                  className="w-8 h-8"
                  src="https://cdn-icons-png.flaticon.com/128/1087/1087927.png"
                  alt=""
                /> */}
                  🛠️ Technology Used
                </h3>
              </Fade>
              <div className="flex gap-4 justify-center items-center flex-wrap">
                {technologyUsed.map((tech, index) => (
                  <Fade triggerOnce={true} cascade={false} direction="up" delay={index * 50}>
                    <div className="w-12 h-12 md:w-14 md:h-14 p-1">
                      <img
                        className="w-full h-full object-cover"
                        src={tech}
                        alt=""
                      />
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          )}
          {/* features */}
          <div className="mb-3 md:mb-6">
            <Fade triggerOnce={true} direction="left">
              <h3 className="text-center text-light-color-text dark:text-dark-color-text text-lg md:text-3xl  mb-2 font-bold  md:mb-3">
                ✨ Features
              </h3>
            </Fade>
            <div className="flex flex-col gap-2 md:gap-3">
              {features &&
                features.map((feature, index) => {
                  const [title, des] = feature.split(":");

                  return (
                    <div key={index}>
                   
                      <Fade triggerOnce={true}
                        cascade={false}
                        direction="right"
                        delay={index * 30}
                      >
                        <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1 text-lg md:text-xl">
                          {index + 1}. {title}:
                        </span>
                    
                        <span className="text-light-color-text dark:text-dark-color-text text-lg md:text-xl">
                          {des}
                        </span>
             
                      </Fade>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="mb-2 md:mb-3">
            <Fade triggerOnce={true} direction="left">
             
              <h3 className="text-center font-semibold text-light-color-text dark:text-dark-color-text mr-1 text-lg md:text-3xl mb-2 md:mb-3">
                🥶 Challenges
              </h3>
            </Fade>
            <Fade triggerOnce={true} direction="right">
              <span className=" text-light-color-text dark:text-dark-color-text text-lg md:text-xl">
                {challenges}
              </span>
            </Fade>
          </div>
          <div className="mb-2 md:mb-6">
        
            <Fade triggerOnce={true} direction="left">
              <h3 className="text-center flex items-center justify-center font-semibold text-light-color-text dark:text-dark-color-text mr-1 text-lg md:text-3xl mb-2 md:mb-3 gap-2">
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/128/17243/17243559.png"
                  alt=""
                />
                Improvements
              </h3>
            </Fade>
            <Fade triggerOnce={true} direction="right">
              <p className=" text-light-color-text dark:text-dark-color-text text-lg md:text-xl">
                {improvements}
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;
