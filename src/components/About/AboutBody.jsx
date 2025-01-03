import React from "react";
import { aboutus1 } from "../../assets/images";

const AboutBody = () => {
  return (
    <div className="text-white">
      <div>
        <div className="grid grid-cols-2 items-center gap-12 mt-32">
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold"> About SquareUp </h1>
            <p>
              SquareUp is a digital product agency that is passionate about
              crafting exceptional digital experiences. We specialize in design,
              engineering, and project management, helping businesses thrive in
              the digital landscape. At SquareUp, we follow a structured and
              collaborative process to ensure the successful delivery of
              exceptional digital products. Our process combines industry best
              practices, creative thinking, and a client-centric approach.
            </p>
          </div>

          <div>
            <img src={aboutus1} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
