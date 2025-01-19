import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/services", text: "Services" },
  { id: 2, url: "/work", text: "Work" },
  { id: 3, url: "/process", text: "Process" },
  { id: 4, url: "/about", text: "About" },
  { id: 5, url: "/careers", text: "Careers" },
];

const NavLinks = () => {
  return (
    <div className="flex ">
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id} className="hover:bg-green50 hover:text-black rounded-md">
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
      <NavLink to="/contactPage">
        <div className="btn bg-green50 border-none text-black hover:bg-green99">
          Contact Us
        </div>
      </NavLink>
    </div>
  );
};

export default NavLinks;
