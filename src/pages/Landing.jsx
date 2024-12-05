import React from "react";
import {
  Hero,
  Faq,
  WhatClientSay,
  WhyChoose,
  Cto,
  Services,
} from "../components";

const Landing = () => {
  return (
    <section className="text-white">
      <Hero />
      <Services />
      <WhyChoose />
      <WhatClientSay />
      <Faq />
      <Cto />
    </section>
  );
};

export default Landing;
