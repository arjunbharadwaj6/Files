import React from "react";
import Sidebar from "./Sidebar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Sidebar />
        <h1>Profile</h1>
      </div>
    </>
  );
};

export default Navbar;
