import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <section className="w-full mx-auto fixed z-10 bg-black  bg-opacity-20 dark:bg-opacity-50 py-2  backdrop-blur-3xl dark:backdrop-blur-xl">
        <Navbar></Navbar>
      </section>
      <section className="">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
