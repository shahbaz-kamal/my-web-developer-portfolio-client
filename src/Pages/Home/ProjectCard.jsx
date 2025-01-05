import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
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
  return (
    <div className="card bg-light-secondary bg-opacity-10 dark:bg-dark-primary dark:bg-opacity-20  shadow-xl">
      <figure className="p-6 rounded-md">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="rounded-xl" src={image_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl" src={image_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl" src={image_3} alt="" />
          </SwiperSlide>{" "}
        </Swiper>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-light-color-text dark:text-dark-color-text">
          {projectTitle}
        </h2>
        <p className=" text-light-color-text dark:text-dark-color-text">
          {projectDescription}
        </p>
        <p>
          <span className="font-semibold text-light-color-text dark:text-dark-color-text mr-1">
            Live Link :
          </span>
          <a href={liveLink} target="_blank">
            <span className="italic underline text-light-primary dark:text-dark-primary">
              {liveLink}
            </span>
          </a>
        </p>
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
        <div className="card-actions justify-end">
          <Link to={`/view-details/${_id}`}>
            <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-primary hover:border-light-primary hover:text-dark-color-text dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
