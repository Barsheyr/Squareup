import React from "react";
import { whatClientSays } from "../../data";

const WhatClientSay = () => {
  return (
    <div>
      <div className="bg-whatclientsay-pattern h-64 relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="text-center py-12 space-y-5 z-10">
          <h1 className="text-4xl font-semibold tracking-widest">
            What our Clients say About us
          </h1>
          <p className="px-[12%]">
            At SquareUp, we take pride in delivering exceptional digital
            products and services that drive success for our clients. Here's
            what some of our satisfied clients have to say about their
            experience working with us
          </p>
        </div>
      </div>

      <div className="">
        {/* cards */}
        <div className="grid lg:grid-cols-2 mt-20">
          {whatClientSays.map((whatClientSay, index) => {
            const { id, name, image, description, btn, Header, Role } =
              whatClientSay;

            return (
              <div
                key={index}
                className="p-10 border border-gray-900 rounded-md"
              >
                <div className="rounded-t-xl space-y-5">
                  <p className="text-green80 font-semibold text-xl">{Header}</p>
                  <p className="text-sm text-grey60"> {description} </p>
                </div>

                <div className="flex flex-row items-center justify-between bg-grey10 p-3 rounded-md mt-10">
                  <div className="flex flex-row items-center gap-5">
                    <img src={image} alt="" />
                    <div>
                      <p className="font-semibold"> {name} </p>
                      <p className="font-semibold text-sm text-grey60">
                        {Role}
                      </p>
                    </div>
                  </div>
                  <div className="btn border-none bg-grey15 hover:bg-green50 hover:text-black">
                    {btn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatClientSay;
