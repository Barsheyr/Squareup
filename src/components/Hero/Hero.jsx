import React from "react";
import {
  CompanyOne,
  CompanyTwo,
  CompanyThree,
  CompanyFour,
  CompanyFive,
  CompanySix,
} from "../../assets/images";

const Hero = () => {
  return (
    <div>
      <div class="bg-hero-pattern bg-cover bg-center">
        <div className="max-w-2xl mx-auto text-center">
          <h1 class="text-white text-6xl font-semibold font-primary">
            A Digital Product Studio that will Work
          </h1>
          <div
            className="flex flex-wrap items-center justify-center gap-5 mt-10 border 
          border-grey15 py-2 bg-grey10 rounded-md"
          >
            <h2> For </h2>
            <div className="btn border-none  bg-grey15 hover:bg-green50 hover:text-black">
              Startups
            </div>
            <div className="btn border-none  bg-grey15 hover:bg-green50 hover:text-black">
              Enterprise leaders
            </div>
            <div className="btn border-none  bg-grey15 hover:bg-green50 hover:text-black">
              Media Publishers
            </div>
            <h2> and </h2>
            <div className="btn border-none bg-grey15 hover:bg-green50 hover:text-black">
              Social Good
            </div>
          </div>
          {/* btn */}
          <div className="space-x-10 mt-10">
            <div className="btn border-none bg-grey15 hover:bg-green50 hover:text-black">
              Our Works
            </div>
            <div className="btn bg-green50 border-none text-black hover:bg-green99">
              Contact Us
            </div>
          </div>
        </div>
        {/* trusted */}
        <div
          className="mt-40 bg-grey10 border border-grey15 rounded-full flex items-center justify-center 
        mx-auto max-w-xs py-2"
        >
          <p> Trusted by 250+ Companies</p>
        </div>
      </div>
      {/* brands */}
      <div className="flex lg:flex-row flex-wrap items-center justify-center mt-20 bg-grey10 border border-grey15 py-5">
        <img src={CompanyOne} alt="" className="w-52" />
        <img src={CompanyTwo} alt="" className="w-52" />
        <img src={CompanyThree} alt="" className="w-52" />
        <img src={CompanyFour} alt="" className="w-52" />
        <img src={CompanyFive} alt="" className="w-52" />
        <img src={CompanySix} alt="" className="w-52" />
      </div>
    </div>
  );
};

export default Hero;
