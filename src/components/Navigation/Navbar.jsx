import React from "react";
import { Logo } from "../../assets/images";
import NavLinks from "../Navigation/NavLinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="align-element flex items-center justify-between py-5 text-white font-primary">
      <div className="flex items-center justify-between gap-3">
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

      <div className="btn bg-green50 border-none text-black hover:bg-green99">
        Contact Us
      </div>
    </div>
  );
};

export default Navbar;
