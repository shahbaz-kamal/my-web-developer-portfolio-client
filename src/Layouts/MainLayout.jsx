import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <section className="w-full mx-auto fixed z-10  bg-opacity-70 bg-black py-2 md:py-4">
        <Navbar></Navbar>
      </section>
      <section className="">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
