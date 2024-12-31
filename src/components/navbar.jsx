import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa";
import ScrollNav from "./navbars/ScrollNav";
import { AuthContext } from "./contexts/contexts";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // signout
  const handleSignout = () => {
    logout()
      .then((success) => {
        Swal.fire({
          title: "Success",
          text: "Logout successful.",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to logout. Try again!",
        });
      });
  };

  // private routs
  const privateRoutes = (
    <>
      <NavLink to={"/user/visas"}>My Visa</NavLink>
      <NavLink to={"/user/applications"}>My Application</NavLink>
      <NavLink to={"/visa/add"}>Add Visa</NavLink>
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
  // login button
  const loginButton = (
    <Link to={"/auth/login"}>
      <button className="btn btn-md 2xl:btn-lg rounded-full theme-btnSecondary">
        Login/Signup
      </button>
    </Link>
  );

  // userProfile
  const userProfile = (
    <div className="relative profile">
      <img
        className=" h-14 w-14 hover:border-gray-400 transition-all cursor-pointer object-cover rounded-full border-2 border-colorPrimary"
        src={user?.photoURL}
        alt={`profile pic of ${user?.displayName}`}
      />
      <div className=" profileMenu w-[200px] p-4 space-y-4 hidden border absolute top-full -right-52 bg-white z-50 rounded-lg transition-all duration-700">
        <h1>{user?.displayName}</h1>
        <button
          onClick={handleSignout}
          className="flex items-center justify-center btn btn-sm bg-red-400"
        >
          Logout
        </button>
      </div>
    </div>
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
          <div className="pl-4">{user ? userProfile : loginButton}</div>
        </div>
      </div>

      <ScrollNav menu={{ publicRoutes, loginButton, userProfile }}></ScrollNav>
    </nav>
  );
};

export default Navbar;
