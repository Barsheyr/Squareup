import React from "react";
import { Careers } from "../../data";

const CareerBody = () => {
  return (
    <div className="">
      <div className="bg-services-pattern h-64 relative flex justify-center items-center text-white">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="text-center py-12 space-y-5 z-10">
          <h1 className="text-4xl font-semibold tracking-widest">
            Join Our Team at SquareUp
          </h1>
          <p>
            Join Our Team at SquareUp Unlock your potential and join our team of
            innovators and problem solvers.
          </p>
        </div>
      </div>

      <div className="mt-20">
        {Careers.map((career, index) => {
          const { Header, paragraph, includes } = career;
          return (
            <div key={index}>
              <div className="text-white">
                <div className="space-y-5">
                  <h1 className="text-3xl font-semibold"> {Header} </h1>
                  <p> {paragraph} </p>
                </div>

                <div className="mt-5 bg-grey20 border border-gray-800 lg:w-[18%] p-3 rounded-md">
                  <p className="">{includes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerBody;
