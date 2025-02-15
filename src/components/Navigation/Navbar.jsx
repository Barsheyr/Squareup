import React from "react";
import { Logo } from "../../assets/images";
import NavLinks from "../Navigation/NavLinks";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <div className="navbar align-element flex items-center justify-between py-5 text-white font-primary">
      <div>
        <NavLink to="/" className="flex items-center justify-between gap-3">
          <img src={Logo} alt="Logo" />
          <h1 className="text-lg font-semibold"> SquareUp </h1>
        </NavLink>
      </div>

      <MobileNav />

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
