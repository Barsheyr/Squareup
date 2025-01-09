import React from "react";
import { Logo } from "../../assets/images";
import { CareerBodyOnes, CareerOpenings } from "../../data";

const CareerHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-20 mt-32">
        {CareerBodyOnes.map((CareerBodyOne, index) => {
          const { numHead, numParagraph } = CareerBodyOne;

          return (
            <div key={index}>
              <div className="space-y-10">
                <h1 className="text-3xl font-semibold text-green80">
                  {numHead}
                </h1>
                <p> {numParagraph} </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-32">
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold"> Current Openings </h1>
          <p>
            We are always on the lookout for talented individuals who are
            passionate about creating exceptional digital experiences. Whether
            you're a designer, engineer, project manager, or have skills that
            align with our agency's mission, we encourage you to explore our
            open positions.
          </p>
        </div>

        <div>
          {CareerOpenings.map((CareerOpening, index) => {
            const {
              TextHeader,
              TextH1,
              TextH2,
              TextH3,
              TextPara1,
              TextPara2,
              TextPara3,
              Btn,
            } = CareerOpening;

            return (
              <div key={index}>
                <div className="mt-32">
                  <h1 className="text-3xl"> {TextHeader} </h1>

                  <div className="grid grid-cols-3 mt-20 gap-5">
                    <div className="space-y-5">
                      <h2 className="text-xl font-semibold"> {TextH1} </h2>
                      <p> {TextPara1} </p>
                      <div className="btn w-full border-none  bg-grey15 hover:bg-green50 hover:text-black">
                        {Btn}
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h2 className="text-xl font-semibold"> {TextH2} </h2>
                      <p> {TextPara2} </p>
                      <div className="btn w-full border-none  bg-grey15 hover:bg-green50 hover:text-black">
                        {Btn}
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h2 className="text-xl font-semibold"> {TextH3} </h2>
                      <p> {TextPara3} </p>
                      <div className="btn w-full border-none  bg-grey15 hover:bg-green50 hover:text-black">
                        {Btn}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-32">
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
              join them on their journey and discover how they can help bring
              your digital ideas to life.
            </p>
          </div>
        </div>

        <div className="bg-grey15 px-20 py-5 rounded-md mt-10">
          <div className="flex flex-row items-center justify-between">
            <h1> Welcome to SquareUp</h1>
            <div className="bg-grey30 px-5 rounded-md">
              <h1 className="py-3">
                Where collaboration, Expertise, and Client-Centricity Intersect
                to Shape the Future of Digital Innovation.
              </h1>
            </div>
            <div className="btn border-none  hover:bg-grey15 bg-green50 text-black hover:text-white">
              Start Project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHeader;
