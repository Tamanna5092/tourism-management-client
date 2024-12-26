import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import "animate.css";

const Root = () => {
  return (
    <div className="font-roboto">
      {/* navbar */}
      <Navbar></Navbar>

      {/* outlet */}
      <div className="min-h-[calc(100vh-370px)]">
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
