import React from "react";
import { aboutus1 } from "../../assets/images";
import { aboutNums } from "../../data";
import { Logo } from "../../assets/images";

const AboutBody = () => {
  return (
    <div className="text-white">
      <div>
        <div className="grid grid-cols-2 items-center gap-12 mt-32">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold"> About SquareUp </h1>
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

        <div className="mt-20">
          <h1 className="text-4xl font-semibold"> Our Story </h1>

          <div className="grid lg:grid-cols-2 gap-10">
            {aboutNums.map((aboutNum, index) => {
              const { num, numHead, numParagraph } = aboutNum;
              return (
                <div key={index}>
                  <div className="mt-10">
                    <div className="flex items-center space-x-5">
                      <p className="text-9xl text-green80 font-semibold">
                        {num}
                      </p>
                      <h1 className="text-4xl text-green80"> {numHead} </h1>
                    </div>
                    <h2 className="mt-10 text-grey60"> {numParagraph} </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
                Combining the power of design, engineering, and project
                management to create transformative digital experiences. They
                invite you to join them on their journey and discover how they
                can help bring your digital ideas to life.
              </p>
            </div>
          </div>

          <div className="bg-grey15 px-20 py-5 rounded-md mt-10">
            <div className="flex flex-row items-center justify-between">
              <h1> Welcome to SquareUp</h1>
              <div className="bg-grey30 px-5 rounded-md">
                <h1 className="py-3">
                  Where collaboration, Expertise, and Client-Centricity
                  Intersect to Shape the Future of Digital Innovation.
                </h1>
              </div>
              <div className="btn border-none  hover:bg-grey15 bg-green50 text-black hover:text-white">
                Start Project
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
