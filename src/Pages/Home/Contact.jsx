import React, { useState } from "react";
import Title from "../../Component/Title";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const Contact = () => {
  const [other, setOther] = useState(false);
  const axiosSecure = UseAxiosSecure();
  const handleSelectChange = (e) => {
    if (e.target.value === "Other") {
      setOther(true);
    } else {
      setOther(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    let category = "";
    if (!other) {
      category = e.target.category.value;
    } else {
      category = e.target.other_category.value;
    }

    const newMessage = { name, email, phone, subject, message, category };
    console.log(newMessage);
    const res = await axiosSecure.post("messages", newMessage);
    if (res.data.insertedId) {
      Swal.fire({
        title:
          "Thank you for reaching out! Your message has been successfully sent. I’ll review it and get back to you as soon as possible.",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please Try Again Later",
      });
    }
  };
  return (
    <div id="contact" className="pt-5 pb-10">
      <header>
        <Title
          title={"Contact Me"}
          subTitle={"Feel Free to Reach Out Anytime"}
        ></Title>
      </header>

      <section className="flex flex-col md:flex-row  md:items-center items-center md:justify-between gap-6">
        {/* left */}

        <div className="w-full md:w-[65%] lg:w-[70%]">
          <div className="card bg-light-secondary dark:bg-dark-secondary bg-opacity-10 dark:bg-opacity-10 w-full  shrink-0 shadow-2xl pt-2 md:pt-4">
            <h3 className="text-center text-light-primary text-xl md:text-2xl font-bold dark:text-dark-primary ">
              Need help? Get in touch now!
            </h3>
            <form
              onSubmit={handleSubmit}
              className="card-body grid grid-cols-1 md:grid-cols-2"
            >
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="phone"
                  type="number"
                  placeholder="Your Phone Number"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                  required
                />
              </div>
              {/* category */}
              <div
                className={`form-control col-span-1 ${
                  other ? "md:col-span-1 " : "md:col-span-2"
                }`}
              >
                <select
                  onChange={handleSelectChange}
                  name="category"
                  className="select select-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                  required
                >
                  <option value="" disabled selected>
                    Select a Service
                  </option>
                  <option value="Custom Web Application Development">
                    Custom Web Application Development
                  </option>
                  {/* <option value="api-dev">API Development</option> */}
                  <option value="Full-stack Development">
                    Full-stack Development
                  </option>
                  <option value=" Single Page Application (SPA) Development">
                    Single Page Application (SPA) Development
                  </option>
                  <option value="E-commerce Website Development">
                    E-commerce Website Development
                  </option>
                  {/* <option value="real-time-web">
                    Real-time Web Applications
                  </option> */}
                  {/* <option value="db-design">
                    Database Design and Optimization
                  </option> */}
                  <option value="Authentication and Authorization">
                    Authentication and Authorization
                  </option>
                  {/* <option value="mobile-app">Mobile App Development</option> */}
                  {/* <option value="cloud-integration">
                    Cloud Integration and Deployment
                  </option> */}
                  <option value="Content Management Systems (CMS)">
                    Content Management Systems (CMS)
                  </option>
                  {/* <option value="pwa-dev">Progressive Web Apps (PWA)</option> */}
                  {/* <option value="performance-opt">
                    Performance Optimization
                  </option> */}
                  {/* <option value="testing-debugging">
                    Testing and Debugging
                  </option> */}
                  <option value="Maintenance and Updates">
                    Maintenance and Updates
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {other && (
                <div className="form-control">
                  <input
                    name="other_category"
                    type="text"
                    placeholder="Write down The category"
                    className="input input-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                    required
                  />
                </div>
              )}
              <div className="form-control md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="textarea textarea-bordered focus:outline-none focus:ring-2 focus:ring-light-primary-20 focus:border-light-primary-20 dark:focus:ring-dark-primary dark:focus:border-dark-primary"
                  rows="4" // Sets the default height of the textarea
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6 md:col-span-2">
                <button className="py-2 font-bold bg-light-accent text-light-color-text dark:bg-dark-primary hover:bg-light-primary hover:text-dark-color-text dark:hover:bg-dark-accent rounded-full transition duration-300 ease-in-out">
                  Send me Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-4 md:gap-10">
          {/* adress */}
          <div className="flex gap-3 ">
            {/* icon */}
            <div className="bg-light-primary-20 rounded-xl text-light-primary p-3 dark:bg-dark-primary-20 dark:text-dark-primary">
              <CiLocationOn size={30} />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-xl text-light-color-text dark:text-dark-color-text">
                Address
              </h3>
              <p className="text-light-color-text dark:text-dark-color-text">
                Nikunja 2, Dhaka, Bangladesh
              </p>
            </div>
          </div>
            {/* email */}
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shahbazkamal384@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 cursor-pointer"
          >
            {/* Icon */}
            <div className="bg-light-primary-20 rounded-xl text-light-primary p-3 dark:bg-dark-primary-20 dark:text-dark-primary">
              <MdEmail size={30} />
            </div>
            {/* Details */}
            <div>
              <h3 className="font-semibold text-base md:text-xl text-light-color-text dark:text-dark-color-text">
                Email
              </h3>
              <p className="text-light-color-text dark:text-dark-color-text">
                shahbazkamal384@gmail.com
              </p>
            </div>
          </a>
          {/* phone */}
          <div className="flex gap-3">
            {/* icon */}
            <div className="bg-light-primary-20 rounded-xl text-light-primary p-3 dark:bg-dark-primary-20 dark:text-dark-primary">
              <FaPhoneAlt size={30} />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-xl text-light-color-text dark:text-dark-color-text">
                Phone
              </h3>
              <p className="text-light-color-text dark:text-dark-color-text">
                +880 1799839985
              </p>
            </div>
          </div>
          {/* WhatsApp */}
          <div className="flex gap-3">
            {/* icon */}
            <div className="bg-light-primary-20 rounded-xl text-light-primary p-3 dark:bg-dark-primary-20 dark:text-dark-primary">
              <FaWhatsapp size={30} />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-xl text-light-color-text dark:text-dark-color-text">
                WhatsApp
              </h3>
              <p className="text-light-color-text dark:text-dark-color-text">
                +880 1799839985
              </p>
            </div>
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default Contact;
