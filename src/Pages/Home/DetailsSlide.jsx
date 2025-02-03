import React from "react";

const DetailsSlide = ({ data }) => {
  const { url, description } = data;
  console.log(data);
  return (
    <div className="relative">
      <img className="rounded-lg w-full object-cover" src={url} alt="" />
      <p className=" ">description</p>
    </div>
  );
};

export default DetailsSlide;
