import React from "react";
import {
  Hero,
  Faq,
  WhatClientSay,
  WhyChoose,
  Cto,
  Services,
  ContactForm,
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
      <ContactForm />
    </section>
  );
};

export default Landing;
