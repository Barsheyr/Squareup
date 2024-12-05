import React from "react";
import { Logo } from "../../assets/images";
import { NavLink } from "react-router-dom";

const CTO = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-20 flex flex-col text-center items-center space-y-10">
        <NavLink to="/" className="">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="space-y-10">
          <h1 className="text-4xl">Thank you for you r interest in SquareUp</h1>
          <p>
            We would love to hear from you and discuss how we can help bring
            your digital ideas to life. Here are the different ways you can get
            in touch with us.
          </p>

          <div className="btn border-none  hover:bg-grey15 bg-green50 text-black hover:text-white">
            Start Project
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTO;
