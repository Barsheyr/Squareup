import React from "react";
import { Logo } from "../../assets/images";

const CareerHeader = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-row justify-center items-center gap-20">
        <div>
          <img src={Logo} alt="" className="w-52" />
        </div>

        <div className="space-y-5">
          <h1 className="text-grey60 text-2xl">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency......
          </h1>
          <p className="text-grey60">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>

      <div className="bg-grey15 px-20 py-5 rounded-md mt-10">
        <div className="flex flex-row items-center justify-between">
          <h1> Welcome to SquareUp</h1>
          <div className="bg-grey30 px-5 rounded-md">
            <h1 className="py-3">
              Where collaboration, Expertise, and Client-Centricity Intersect to
              Shape the Future of Digital Innovation.
            </h1>
          </div>
          <div className="btn border-none  hover:bg-grey15 bg-green50 text-black hover:text-white">
            Start Project
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHeader;
