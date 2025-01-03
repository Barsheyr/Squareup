import React, { useState } from "react";
import { Processes, processNums } from "../../data";
import { Logo } from "../../assets/images";
import { NavLink } from "react-router-dom";

const ProcessBody = () => {
  return (
    <div>
      <div className="space-y-10 py-32">
        {Processes.map((process, index) => {
          const { Header, paragraph, includes } = process;
          return (
            <div key={index}>
              <div className="text-white">
                <div>
                  <h1 className="text-3xl font-semibold"> {Header} </h1>
                  <p> {paragraph} </p>
                </div>

                <div className="mt-10 bg-grey20 border border-gray-800 lg:w-[30%] p-3 rounded-md">
                  <p className="">{includes}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                  {processNums.map((processNum, index) => {
                    const { num, numHead, numParagraph } = processNum;
                    return (
                      <div key={index}>
                        <div className="mt-10">
                          <div className="flex items-end space-x-5">
                            <p className="text-9xl text-green80 font-semibold">
                              {num}
                            </p>
                            <h1 className="text-2xl"> {numHead} </h1>
                          </div>
                          <h2 className="mt-10"> {numParagraph} </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        <div className="py-20 bg-grey10">
          <div className="max-w-5xl mx-auto px-20 flex flex-col text-center items-center space-y-10">
            <NavLink to="/" className="">
              <img src={Logo} alt="Logo" />
            </NavLink>

            <div className="space-y-10 text-white">
              <h1 className="text-4xl">
                Thank you for your interest in SquareUp
              </h1>
              <p>
                No matter which services you choose, we are committed to
                delivering exceptional results that exceed your expectations.
                Our multidisciplinary team works closely together to ensure
                seamless collaboration and a unified vision for your digital
                product.
              </p>

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

export default ProcessBody;
