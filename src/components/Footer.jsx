import React from "react";
import { Logo } from "../assets/images";
import NavLinks from "../components/Navigation/NavLinks";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="align-element py-20 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-3">
          <NavLink to="/" className="">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <h1 className="text-lg font-semibold"> SquareUp </h1>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="flex items-center justify-between gap-5">
          <p>Stay Connected </p>
          <div>
            <FaTwitter color="#B1FF33" size={30} />
          </div>
          <div>
            <FaFacebook color="#B1FF33" size={30} />
          </div>
          <div>
            <FaLinkedin color="#B1FF33" size={30} />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-20">
        <div className="flex items-center gap-5">
          <p> hello@squareup.com </p>
          <p> +234 7069515411 </p>
          <p> Lagos, Nigeria </p>
        </div>

        <div>
          <p className="text-sm">
            &copy; {currentYear} SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
