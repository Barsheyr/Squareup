import React from "react";
import {
  ServiceIconOne,
  ServiceIconTwo,
  ServiceIconThree,
} from "../../assets/images";

const Services = () => {
  return (
    <div>
      <div className="bg-services-pattern h-64 relative flex justify-center items-center">
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

      <div className="grid lg:grid-cols-3 py-20 px-10 gap-5">
        <div className="space-y-12">
          <div className="bg-grey10 rounded-md w-14 h-14 flex">
            <img src={ServiceIconOne} alt="" className="p-2" />
          </div>

          <h1 className="text-xl font-semibold"> Design </h1>
          <p>
            At Squareup, our design team is passionate about creating stunning,
            user-centric designs that captivate your audience and elevate your
            brand. We believe that great design is not just about aesthetics;
            it's about creating seamless and intuitive user experiences.
          </p>
          <div className="btn w-full border-none  bg-grey15 hover:bg-green50 hover:text-black">
            Learn More
          </div>
        </div>
        <div className="space-y-12">
          <div className="bg-grey10 rounded-md w-14 h-14 flex">
            <img src={ServiceIconTwo} alt="" className="p-2" />
          </div>
          <h1 className="text-xl font-semibold"> Engineering </h1>
          <p>
            Our engineering team combines technical expertise with a passion for
            innovation to build robust and scalable digital solutions. We
            leverage the latest technologies and best practices to deliver
            high-performance applications tailored to your specific needs.
          </p>
          <div className="btn w-full border-none  bg-grey15 hover:bg-green50 hover:text-black">
            Learn More
          </div>
        </div>
        <div className="space-y-10">
          <div className="bg-grey10 rounded-md w-14 h-14 flex">
            <img src={ServiceIconThree} alt="" className="p-2" />
          </div>

          <h1 className="text-xl font-semibold"> Project Management </h1>
          <p>
            Our experienced project management team ensures that your projects
            are delivered on time, within budget, and according to your
            specifications. We follow industry-standard methodologies and employ
            effective communication and collaboration tools to keep you informed
            throughout the development process.
          </p>
          <div className="btn w-full border-none  bg-grey15 hover:bg-green50 hover:text-black">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
