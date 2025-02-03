import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const MessageCard = ({ singleMessage, index, refetchMessageData }) => {
  const axiosSecure = UseAxiosSecure();
  const { _id, name, email, phone, subject, message, category, isRead } =
    singleMessage;
  const handleUpdate = async (_id) => {
    console.log(_id);
    const res = await axiosSecure.patch(`message/${_id}`);
    if (res.data.modifiedCount) {
      refetchMessageData();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Update is not successfull",
      });
    }
  };
  return (
    <div className="w-full mx-auto bg-light-secondary dark:bg-dark-secondary bg-opacity-10 dark:bg-opacity-10 rounded-xl shadow-md p-4 mb-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-semibold text-light-primary dark:text-dark-primary">
          Message #{index + 1}
        </h3>
        <p className="text-light-color-text dark:text-dark-color-text">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-light-color-text dark:text-dark-color-text">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-light-color-text dark:text-dark-color-text">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="text-light-color-text dark:text-dark-color-text">
          <strong>Subject:</strong> {subject}
        </p>
        <p className="text-light-color-text dark:text-dark-color-text">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-light-color-text dark:text-dark-color-text">
          <strong>Message:</strong> {message}
        </p>
        <div className="flex justify-end items-center gap-4">
          <div className="text-right">
            {isRead ? (
             <button
             disabled
             className="bg-light-accent text-light-color-text dark:bg-dark-accent dark:text-dark-color-text py-1 px-4 rounded-lg opacity-50 cursor-not-allowed"
           >
             Seen By Me
           </button>
            ) : (
              <button
                onClick={() => handleUpdate(_id)}
                className="bg-light-accent text-light-color-text dark:bg-dark-accent dark:text-dark-color-text py-1 px-4 rounded-lg hover:bg-light-primary hover:text-dark-color-text dark:hover:bg-dark-primary-70 dark:hover:text-light-color-text"
              >
                Respond
              </button>
            )}
          </div>
          {isRead && (
            <div className="text-green-600">
              <FaCheckDouble size={25} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
