import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <section className="w-full mx-auto">
        <Navbar></Navbar>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
