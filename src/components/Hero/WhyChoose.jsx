import React from "react";
import {
  ChooseOne,
  ChooseTwo,
  ChooseThree,
  ChooseFour,
} from "../../assets/images";

const WhyChoose = () => {
  return (
    <div>
      <div className="bg-whychoose-pattern h-64 relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="text-center py-12 space-y-5 z-10">
          <h1 className="text-4xl font-semibold tracking-widest">
            Why Choose SquareUp?
          </h1>
          <p>
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
        <div className="py-10 space-y-10">
          <div className="flex space-x-5">
            <img src={ChooseOne} alt="" />
            <h1 className="text-xl font-semibold"> Expertise </h1>
          </div>
          <p>
            Our team consists of highly skilled professionals who have a deep
            understanding of the digital landscape. We stay updated with the
            latest industry trends and best practices to deliver cutting-edge
            solutions.
          </p>
        </div>
        <div className="py-10 space-y-10">
          <div className="flex space-x-5">
            <img src={ChooseTwo} alt="" />
            <h1 className="text-xl font-semibold"> Client-Centric Approach </h1>
          </div>
          <p>
            We prioritize our clients and their unique needs. We listen to your
            ideas, challenges, and goals, and tailor our services to meet your
            specific requirements. Your success is our success.
          </p>
        </div>
        <div className="py-10 space-y-10">
          <div className="flex space-x-5">
            <img src={ChooseThree} alt="" />
            <h1 className="text-xl font-semibold">Results-Driven Solutions</h1>
          </div>
          <p>
            Our primary focus is on delivering results. We combine creativity
            and technical expertise to create digital products that drive
            business growth, enhance user experiences, and provide a competitive
            advantage.
          </p>
        </div>
        <div className="py-10 space-y-10">
          <div className="flex space-x-5">
            <img src={ChooseFour} alt="" />
            <h1 className="text-xl font-semibold">Collaborative Partnership</h1>
          </div>
          <p>
            We value long-term relationships with our clients. We see ourselves
            as your digital partner, providing ongoing support, maintenance, and
            updates to ensure your digital products continue to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
