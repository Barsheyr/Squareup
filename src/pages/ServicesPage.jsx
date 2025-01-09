import React from "react";
import { Services } from "../data";
import { Logo } from "../assets/images";
import { NavLink } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div>
      <div className="bg-services-pattern h-64 relative flex justify-center items-center text-white">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="text-center py-12 space-y-5 z-10">
          <h1 className="text-4xl font-semibold tracking-widest">
            Our Services
          </h1>
          <p>
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </div>

      <div>
        <div className="space-y-10 py-32">
          {Services.map((service, index) => {
            const {
              Header,
              paragraph,
              includes,
              Text1,
              Text2,
              Text3,
              IconText1,
              IconText2,
              IconText3,
              IconText4,
              IconText5,
              IconText6,
              IconText7,
              IconText8,
              IconText9,
              IconText10,
              IconText11,
              IconText12,
              img1,
              img2,
              img3,
              img4,
            } = service;
            return (
              <div key={index}>
                <div className="text-white">
                  <div>
                    <h1 className="text-3xl font-semibold"> {Header} </h1>
                    <p> {paragraph} </p>
                  </div>

                  <div className="mt-10 bg-grey20 border border-gray-800 w-[25%] p-3">
                    <p className="">{includes}</p>
                  </div>

                  <div className="space-y-10 mt-10">
                    <div className="gap-5">
                      <p className="text-xl mb-10 text-grey40 font-semibold">
                        {Text1}
                      </p>
                      <div className="grid grid-cols-4">
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img1} alt="" className="w-14" />
                          <p className="text-md">{IconText1}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img2} alt="" className="w-14" />
                          <p className="text-md">{IconText2}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img3} alt="" className="w-14" />
                          <p className="text-md">{IconText3}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img4} alt="" className="w-14" />
                          <p className="text-md">{IconText4}</p>
                        </div>
                      </div>
                    </div>

                    <div className="gap-5">
                      <p className="text-xl mb-10 text-grey40 font-semibold">
                        {Text2}
                      </p>
                      <div className="grid grid-cols-4">
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img1} alt="" className="w-14" />
                          <p className="text-md">{IconText5}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img2} alt="" className="w-14" />
                          <p className="text-md">{IconText6}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img3} alt="" className="w-14" />
                          <p className="text-md">{IconText7}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img4} alt="" className="w-14" />
                          <p className="text-md">{IconText8}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl mb-10 text-grey40 font-semibold">
                        {Text3}
                      </p>
                      <div className="grid grid-cols-4">
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img1} alt="" className="w-14" />
                          <p className="text-md">{IconText9}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img2} alt="" className="w-14" />
                          <p className="text-md">{IconText10}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img3} alt="" className="w-14" />
                          <p className="text-md">{IconText11}</p>
                        </div>
                        <div className="border border-gray-800 px-10 py-5 space-y-5">
                          <img src={img4} alt="" className="w-14" />
                          <p className="text-md">{IconText12}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-20 bg-grey10">
        <div className="max-w-5xl mx-auto px-20 flex flex-col text-center items-center space-y-10">
          <NavLink to="/" className="">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <div className="space-y-10 text-white">
            <h1 className="text-4xl">
              Let us Bring your Ideas to Life in the Digital World.
            </h1>
            <p>
              No matter which services you choose, we are committed to
              delivering exceptional results that exceed your expectations. Our
              multidisciplinary team works closely together to ensure seamless
              collaboration and a unified vision for your digital product.
            </p>

            <div className="btn border-none  hover:bg-grey15 bg-green50 text-black hover:text-white">
              Start Project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
