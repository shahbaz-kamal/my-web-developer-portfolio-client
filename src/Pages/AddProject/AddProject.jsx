import React, { useEffect, useState } from "react";
import Title from "../../Component/Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { imageUpload } from "../../Utilities/imageUpload";

const AddProject = () => {
  const [publishedDate, setPublishedDate] = useState(new Date());
  const [technologyUsed, setTechnologyUsed] = useState([]);
  const [images, setImages] = useState([]);
  const [cardImages, setCardImages] = useState([]);
  const axiosSecure = UseAxiosSecure();

  const handleImageUpload = async (imageData) => {
    try {
      const { url: newImage } = await imageUpload(imageData);
      setImages((prev) => [...prev, newImage]);
    } catch (error) {
      console.log("Error in image uploading", error, error.message);
    }
  };
  const handleCardImageUpload = async (imageData) => {
    try {
      const { url: newImage } = await imageUpload(imageData);
      console.log("triggering");
      setCardImages((prev) => [...prev, newImage]);
    } catch (error) {
      console.log("Error in image uploading", error, error.message);
    }
  };
  console.log(images);
  // handle tech
  const handleTechnologyUsed = async (e) => {
    const newTech = e.target.value;
    if (technologyUsed.includes(newTech)) {
      console.log("already included");
      return;
    }
    setTechnologyUsed((prev) => [...prev, newTech]);
  };
  console.log(technologyUsed);
  //   handle add
  const handleAddProject = (e) => {
    e.preventDefault();

    const projectTitle = e.target.projectTitle.value;
    const projectDescription = e.target.projectDescription.value;

    const liveLink = e.target.liveLink.value;
    const clientGitRepo = e.target.clientGitRepo.value;
    const serverGitRepo = e.target.serverGitRepo.value || null;
    const challenges = e.target.challenges.value;
    const improvements = e.target.improvements.value;
    const imageDescription = e.target.imageDescription.value.split("\n");
    const features = e.target.features.value.split("\n");
    const imageAndDescriptions = images.map((url, index) => ({
      url,
      description: imageDescription[index],
    }));
    const newProjectData = {
      projectTitle,
      projectDescription,
      cardImages,
      imageAndDescriptions,
      liveLink,
      clientGitRepo,
      serverGitRepo,
      challenges,
      improvements,
      publicationDate: publishedDate,
      features,
      technologyUsed,
    };
    console.log(imageAndDescriptions);
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
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    handleCardImageUpload(file);
                  }
                }}
                type="file"
                className="file-input file-input-bordered "
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    handleImageUpload(file);
                  }
                }}
                type="file"
                className="file-input file-input-bordered "
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
                name="challenges"
                type="text"
                placeholder="My challenges"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              />
            </div>
            <div className="form-control">
              <input
                name="improvements"
                type="text"
                placeholder="My improvements"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              />
            </div>
            <div className="form-control grid-cols-2">
              <label htmlFor="">Publication Date</label>
              <DatePicker
                selected={publishedDate}
                onChange={(date) => setPublishedDate(date)}
              />
            </div>
            <div className="form-control">
              <textarea
                name="imageDescription"
                type="text"
                placeholder="imageDescription"
                className="grid-cols-2 input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="features"
                type="text"
                placeholder="Features"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div className="form-control">
              <select
                onChange={handleTechnologyUsed}
                name="technologies"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                required
              >
                <option value="">Select Technologies</option>
                <option value="https://i.ibb.co.com/MZ9LksT/html.png">
                  HTML
                </option>
                <option value="https://i.ibb.co.com/1zyXkLr/css-3.png">
                  CSS
                </option>
                <option value="https://i.ibb.co.com/XkWsbQDL/tailwind.png">
                  Tailwind CSS
                </option>
                <option value="https://i.ibb.co.com/4Mvj996/js.png">
                  JavaScript
                </option>
                <option value="https://i.ibb.co.com/C5hww77M/firebase.png">
                  FireBase
                </option>
                <option value="https://i.ibb.co.com/KL6XByh/react.png">
                  React
                </option>
                <option value="https://i.ibb.co.com/6ZMC66j/nodejs.png">
                  Node.js
                </option>
                <option value="https://i.ibb.co.com/6JyLGWnk/express-color.png">
                  Express.js
                </option>
                <option value="https://i.ibb.co.com/VQpcJZY/mongoDB.png">
                  MongoDB
                </option>
                <option value="https://img.icons8.com/?size=80&id=t9fIqVSKsYSK&format=png">
                  Stripe
                </option>
              </select>
            </div>
            <div className="form-control mt-6 col-span-2">
              <button className="py-2 font-bold bg-light-accent text-light-color-text dark:bg-dark-primary hover:bg-light-primary hover:text-dark-color-text dark:hover:bg-dark-accent rounded-full transition duration-300 ease-in-out">
                Add Projects
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="grid grid-cols-5 gap-6 mt-4">
        {images.map((image, index) => (
          <div key={index}>
            <img className="w-full object-cover" src={image}></img>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AddProject;
