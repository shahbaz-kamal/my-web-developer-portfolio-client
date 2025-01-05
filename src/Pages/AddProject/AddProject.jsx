import React, { useState } from "react";
import Title from "../../Component/Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const AddProject = () => {
  const [publishedDate, setPublishedDate] = useState(new Date());
  const axiosSecure = UseAxiosSecure();
  //   handle add
  const handleAddProject = (e) => {
    e.preventDefault();
    const projectTitle = e.target.projectTitle.value;
    const projectDescription = e.target.projectDescription.value;
    const image_1 = e.target.image_1.value;
    const image_2 = e.target.image_2.value;
    const image_3 = e.target.image_3.value;
    const liveLink = e.target.liveLink.value;
    const clientGitRepo = e.target.clientGitRepo.value;
    const serverGitRepo = e.target.serverGitRepo.value;
    const struggle = e.target.struggle.value;
    const lackings = e.target.lackings.value;
    const newProjectData = {
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
      publicationDate: publishedDate,
    };
    console.log(newProjectData);
    axiosSecure
      .post("add-project", newProjectData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("Data added successfully");
        }
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="pt-[72px] max-w-[1320px] mx-auto">
      <header>
        <Title title={"Add Project"}></Title>
      </header>
      <div className="w-full ">
        <div className="card bg-light-secondary dark:bg-dark-secondary bg-opacity-10 dark:bg-opacity-10 w-full  shrink-0 shadow-2xl pt-2 md:pt-4">
          <h3 className="text-center text-light-primary text-xl md:text-2xl font-bold dark:text-dark-primary ">
            Need help? Get in touch now!
          </h3>
          <form
            onSubmit={handleAddProject}
            className="card-body grid grid-cols-1 md:grid-cols-2"
          >
            <div className="form-control">
              <input
                name="projectTitle"
                type="text"
                placeholder="Project Title"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="projectDescription"
                type="text"
                placeholder="Project Description"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="image_1"
                type="url"
                placeholder="First image of the project"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="image_2"
                type="url"
                placeholder="Second image of the project"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="image_3"
                type="url"
                placeholder="Third image of the project"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="liveLink"
                type="url"
                placeholder="Live Link"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="clientGitRepo"
                type="url"
                placeholder="Client Side Git Repo"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="serverGitRepo"
                type="url"
                placeholder="Server Side Git Repo"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              />
            </div>
            <div className="form-control">
              <input
                name="struggle"
                type="text"
                placeholder="My Struggle"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              />
            </div>
            <div className="form-control">
              <input
                name="lackings"
                type="text"
                placeholder="My Lackings"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Publication Date</label>
              <DatePicker
                selected={publishedDate}
                onChange={(date) => setPublishedDate(date)}
              />
            </div>

            <div className="form-control mt-6 col-span-2">
              <button className="py-2 font-bold bg-light-accent text-light-color-text dark:bg-dark-primary hover:bg-light-primary hover:text-dark-color-text dark:hover:bg-dark-accent rounded-full transition duration-300 ease-in-out">
                Add Projects
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
