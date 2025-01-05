import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa";
import ScrollNav from "./navbars/ScrollNav";
import { AuthContext } from "./contexts/contexts";
import Swal from "sweetalert2";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user, logout, handleMode, darkMode } = useContext(AuthContext);

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
      <NavLink state={"/user/visas"} to={"/user/visas"}>
        My Visa
      </NavLink>
      <NavLink state={"/user/applications"} to={"/user/applications"}>
        My Application
      </NavLink>
      <NavLink state={"/visa/add"} to={"/visa/add"}>
        Add Visa
      </NavLink>
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
      <button className="btn btn-sm md:btn-md 2xl:btn-lg rounded-full theme-btnSecondary">
        Login/Signup
      </button>
    </Link>
  );

  // open mobile menu
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // userProfile
  const userProfile = (
    <div className={`relative profile `}>
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
    <nav
      className={`sticky z-50 top-0 left-0 ${
        darkMode && "bg-gray-900 text-white"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4 md:py-5 2xl:py-6 px-4 md:px-10 shadow-md">
        {/* web logo */}
        <div className="hidden md:block border-r pr-10 order-1">
          <img className="h-10 md:h-auto" src={logo} alt="" />
        </div>
        {/* nav menus desktop */}
        <div
          className={`links grow hidden md:flex flex-col md:flex-row  justify-start gap-2 text-lg items-center font-medium order-3 md:order-2 `}
        >
          {publicRoutes}
        </div>
        {/* nav menu mobile */}
        <div
          className={` grow flex flex-col  justify-start gap-2 text-lg items-center font-medium order-3 md:order-2 ${
            openMenu ? "block" : "hidden"
          }`}
        >
          {publicRoutes}
        </div>
        {/* website contact */}
        <div className=" flex w-full gap-4 md:w-auto justify-between md:justify-end items-center order-2 md:order-3">
          {/* contact number */}
          <div className="px-4 border-r 2xl:flex items-center gap-4 hidden ">
            <div className="text-4xl text-orange-500">
              <FaPhone />
            </div>
            <div className="">
              <p className="text-sm text-gray-400">Call Anytime</p>
              <p className="font-bold text-lg">+8801800-00000</p>
            </div>
          </div>
          {/* mobile logo img */}
          <div className="md:hidden border-r pr-10">
            <img className="h-10 md:h-auto" src={logo} alt="" />
          </div>
          {/* login button */}
          <div className="pl-4">{user ? userProfile : loginButton}</div>

          {/* dark light mode */}
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" checked={darkMode} onChange={handleMode} />

              {/* sun icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {/* nav button */}
          <div onClick={handleMenu} className="btn btn-sm btn-circle md:hidden">
            <IoMenu />
          </div>
        </div>
      </div>

      <ScrollNav menu={{ publicRoutes, loginButton, userProfile }}></ScrollNav>
    </nav>
  );
};

export default Navbar;
