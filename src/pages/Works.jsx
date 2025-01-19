import React from "react";
import { WorksBody } from "../components";

const Works = () => {
  return (
    <div>
      <div className="">
        <div className="bg-services-pattern h-64 relative flex justify-center items-center text-white">
          <div className="absolute w-full h-full bg-black/70"></div>
          <div className="text-center py-12 space-y-5 z-10">
            <h1 className="text-4xl font-semibold tracking-widest">
              Our Works
            </h1>
            <p className="lg:px-72 px-5 text-sm lg:text-md">
              Discover a portfolio of visually stunning and strategically
              crafted digital projects that showcase our creativity and
              expertise
            </p>
          </div>
        </div>
      </div>

      <div>
        <WorksBody />
      </div>
    </div>
  );
};

export default Works;
