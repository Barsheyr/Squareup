import React from "react";
import { Works, Worksbodys } from "../../data";
import { FiArrowUpRight } from "react-icons/fi";
import { Logo } from "../../assets/images";
import { NavLink } from "react-router-dom";

const WorkBody = () => {
  return (
    <div className="text-white space-y-10 py-32">
      {Works.map((process, index) => {
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

              <div className="grid lg:grid-cols-2 gap-20">
                {Worksbodys.map((workBody, index) => {
                  const { HeaderOne, paragraph, HeaderTwo, Link, img } =
                    workBody;
                  return (
                    <div key={index}>
                      <div className="mt-10">
                        <div className="space-y-10">
                          <h1 className="lg:text-xl text-lg text-grey60">
                            {HeaderOne}
                          </h1>
                          <img src={img} alt="" />

                          <div className="flex items-center justify-between">
                            <div className="space-y-2">
                              <h2> {HeaderTwo} </h2>
                              <p className="bg-grey15 p-2 rounded-md">{Link}</p>
                            </div>
                            <div className="bg-grey30 rounded-md">
                              <FiArrowUpRight color="#AAFF00" size={40} />
                            </div>
                          </div>
                          <p className="text-grey60"> {paragraph} </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="py-20 bg-grey10 mt-32">
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
                      delivering exceptional results that exceed your
                      expectations. Our multidisciplinary team works closely
                      together to ensure seamless collaboration and a unified
                      vision for your digital product.
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
      })}
    </div>
  );
};

export default WorkBody;
