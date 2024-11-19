import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>

      {/* outlet */}
      <div className="min-h-[calc(100vh-310px)]">
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
