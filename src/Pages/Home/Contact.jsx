import React from "react";
import Title from "../../Component/Title";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="py-5">
      <header>
        <Title title={"Contact Me"}></Title>
      </header>

      <section className="flex flex-col md:flex-row  md:items-center items-center md:justify-between gap-6">
        {/* left */}

        <div className="w-full md:w-[65%] lg:w-[70%]">
          <div className="card bg-light-secondary dark:bg-dark-secondary bg-opacity-10 dark:bg-opacity-10 w-full  shrink-0 shadow-2xl pt-2 md:pt-4">
            <h3 className="text-center text-light-primary text-xl md:text-2xl font-bold dark:text-dark-primary ">
              Need help? Get in touch now!
            </h3>
            <form className="card-body grid grid-cols-1 md:grid-cols-2">
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
                  name="subject"
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
