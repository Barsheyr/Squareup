import React from "react";

const AboutHeader = () => {
  return (
    <div className="">
      <div className="bg-services-pattern h-64 relative flex justify-center items-center text-white">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="text-center py-12 space-y-5 z-10">
          <h1 className="text-4xl font-semibold tracking-widest">About Us</h1>
          <p className="px-72">
            Welcome to SquareUp, where collaboration, expertise, and
            client-centricity intersect to shape the future of digital
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
