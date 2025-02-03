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
  Navigation,
  EffectCards,
  EffectCoverflow,
} from "swiper/modules";
import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Title from "../../Component/Title";
import { Link } from "react-router-dom";
import { format, isValid, parse, parseISO } from "date-fns";
import DetailsSlide from "./DetailsSlide";
import "swiper/css/effect-cards";

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
    struggle,
    lackings,
    publicationDate,
  } = project;
  console.log(imageAndDescriptions);

  // const sweeperWrappedRef = useRef(null);
  // const adjustMargin = () => {
  //   const screenWidth = window.innerWidth;
  //   if (sweeperWrappedRef.current) {
  //     sweeperWrappedRef.current.style.marginLeft =
  //       screenWidth <= 520
  //         ? "0px"
  //         : screenWidth <= 650
  //         ? "-50px"
  //         : screenWidth <= 800
  //         ? "-100px"
  //         : "-150px";
  //   }
  // };
  // useEffect(() => {
  //   adjustMargin();
  //   window.addEventListener("resize", adjustMargin);
  //   return () => window.removeEventListener("resize", adjustMargin);
  // }, []);
  return (
    <div className="pt-32 w-11/12 md:w-10/12 mx-auto">
      <header>
        <Title title={"Project Details"} subTitle={projectTitle}></Title>
      </header>
      <section className="flex flex-col gap-6 p-4 bg-light-primary-20 dark:bg-dark-primary-20 rounded-lg">
        {/* Images */}
        <div className="rounded-lg flex items-center justify-center overflow-hidden  mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            // modules={[Pagination]}
            // grabCursor
            // initialSlide={2}
            // centeredSlides
            // slidesPerView="auto"
            // speed={800}
            // slideToClickedSlide
            // pagination={{
            //   clickable: true,
            // }}
            // breakpoints={{
            //   320: { spaceBetween: 40 },
            //   650: { spaceBetween: 30 },
            //   1000: { spaceBetween: 20 },
            // }}
            // loop={true}
            // onSwiper={(swiper) => {
            //   sweeperWrappedRef.current = swiper.wrapperEl;
            // }}
            className="mySwiper"
          >
            {imageAndDescriptions
              ? imageAndDescriptions.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="relative">
                      <img className="rounded-lg" src={item.url} alt="" />
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
        {/* descriptions */}
        <div className="card-body w-full">
          <h2 className="card-title text-light-color-text dark:text-dark-color-text">
            {projectTitle}
          </h2>
          <p className=" text-light-color-text dark:text-dark-color-text">
            {projectDescription}
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-3">
            <p className="lg:w-1/2">
              <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1">
                Live Link :
              </span>
              <a href={liveLink} target="_blank">
                <span className="italic underline text-light-primary dark:text-dark-primary">
                  {liveLink}
                </span>
              </a>
            </p>
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

          <p>
            <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1">
              Github Client Repo :
            </span>
            <a href={clientGitRepo} target="_blank">
              <span className="italic underline text-light-primary dark:text-dark-primary">
                {clientGitRepo}
              </span>
            </a>
          </p>
          <p>
            <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1">
              Github Server Repo :
            </span>
            <a href={serverGitRepo} target="_blank">
              {" "}
              <span className="italic underline text-light-primary dark:text-dark-primary">
                {serverGitRepo}
              </span>
            </a>
          </p>
          <p>
            <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1">
              Difficulty Faced :
            </span>
            <span className=" text-light-color-text dark:text-dark-color-text">
              {struggle}
            </span>
          </p>
          <p>
            <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1">
              Lackings:
            </span>
            <span className=" text-light-color-text dark:text-dark-color-text">
              {lackings}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;
