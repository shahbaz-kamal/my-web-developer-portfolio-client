import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Title from "../../Component/Title";
import { Link } from "react-router-dom";
import { format, isValid, parse } from "date-fns";

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
    image_1,
    image_2,
    image_3,
    liveLink,
    clientGitRepo,
    serverGitRepo,
    struggle,
    lackings,
    publicationDate,
  } = project;
  console.log(projectDescription);
  const parsedDate = publicationDate
    ? parse(publicationDate, "yyyy-MM-dd", new Date())
    : null;
  return (
    <div className="pt-32 w-11/12 md:w-10/12 mx-auto">
      <header>
        <Title title={"Project Details"}></Title>
      </header>
      <section className="flex flex-col gap-6 p-4 bg-light-primary-20 dark:bg-dark-primary-20 rounded-lg">
        {/* Images */}
        <div className="rounded-lg ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {" "}
            <SwiperSlide>
              <img className="rounded-lg" src={image_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img className="rounded-lg" src={image_2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img className="rounded-lg" src={image_3} alt="" />
            </SwiperSlide>{" "}
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
                {parsedDate && isValid(parsedDate)
                  ? format(parsedDate, "PPP")
                  : "n/a"}
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
