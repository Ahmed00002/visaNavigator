import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa";
import ScrollNav from "./navbars/ScrollNav";

const Navbar = () => {
  // private routs
  const privateRoutes = (
    <>
      <NavLink to={"/user/visas"}>My Visa</NavLink>
      <NavLink to={"/user/applications"}>My Application</NavLink>
      <NavLink to={"/visas/add"}>Add Visa</NavLink>
    </>
  );
  // public routs
  const publicRoutes = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/visas"}>All Visa</NavLink>
      {privateRoutes}
    </>
  );

  return (
    <nav>
      <div className="flex gap-4 py-4 md:py-5 2xl:py-6 px-10 shadow-md">
        <div className=" border-r pr-10">
          <img src={logo} alt="" />
        </div>
        <div className="links grow flex  justify-start gap-2 text-lg items-center font-medium">
          {publicRoutes}
        </div>
        <div className=" flex items-center">
          <div className="px-4 border-r 2xl:flex items-center gap-4 hidden ">
            <div className="text-4xl text-orange-500">
              <FaPhone />
            </div>
            <div className="">
              <p className="text-sm text-gray-400">Call Anytime</p>
              <p className="font-bold text-lg">+8801800-00000</p>
            </div>
          </div>
          <div className="pl-4">
            <button className="btn btn-md 2xl:btn-lg rounded-full theme-btnSecondary">
              Login/Signup
            </button>
          </div>
        </div>
      </div>

      <ScrollNav menu={{ publicRoutes }}></ScrollNav>
    </nav>
  );
};

export default Navbar;
