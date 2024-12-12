import React from "react";

const ProcessHeader = () => {
  return (
    <div className="">
      <div className="bg-services-pattern h-64 relative flex justify-center items-center text-white">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="text-center py-12 space-y-5 z-10">
          <h1 className="text-4xl font-semibold tracking-widest">
            Process of starting a project
          </h1>
          <p>
            At SquareUp, we value transparency, collaboration, and delivering
            exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessHeader;
