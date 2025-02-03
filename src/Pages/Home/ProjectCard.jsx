import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import './ProjectCard.css'
const ProjectCard = ({ project }) => {
  const {
    _id,
    projectTitle,
    projectDescription,
    cardImages,
    liveLink,
    clientGitRepo,
    serverGitRepo,
    struggle,
    lackings,
    publicationDate,
  } = project;
  console.log(cardImages)
  return (
    <div className="card bg-base-200  dark:bg-dark-primary dark:bg-opacity-20  shadow-xl">
      <figure className="px-6 pt-0 rounded-md">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* {project?project.map((singleProject,index)=><SwiperSlide key={singleProject._id} image_1={}></SwiperSlide>):} */}
          {cardImages
            ? cardImages.map((item, index) => (
                <SwiperSlide key={index} item={item}>
                  <img className="rounded-xl" src={item} alt="" />
                </SwiperSlide>
              ))
            : ""}
       
        </Swiper>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-light-color-text dark:text-dark-color-text">
          {projectTitle}
        </h2>
        <p className=" text-light-color-text dark:text-dark-color-text ">
          {projectDescription.slice(0, 200)}....{" "}
          <span className="font-bold text-light-accent dark:text-dark-color-text">
            {" "}
            <Link to={`/view-details/${_id}`}>View Details </Link>
          </span>
        </p>
        <div className="flex justify-center items-center mb-6 flex-wrap gap-4">
          <a href={liveLink} target="_blank">
            <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-secondary hover:border-light-secondary  dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
              Live Link
            </button>
          </a>
          <a href={clientGitRepo} target="_blank">
            <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-secondary hover:border-light-secondary  dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
              {" "}
              Git Client
            </button>
          </a>
          <a href={serverGitRepo} target="_blank">
            <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-secondary hover:border-light-secondary  dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
              {" "}
              Git Server
            </button>
          </a>
        </div>

        {/* <div className="card-actions justify-center">
          <Link to={`/view-details/${_id}`}>
            <button className="btn btn-primary bg-light-accent border-light-accent dark:bg-dark-primary dark:border-dark-primary text-light-color-text hover:bg-light-secondary hover:border-light-secondary  dark:hover:bg-dark-accent dark:hover:border-dark-accent transition duration-300 ease-in-out">
              View Details
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
