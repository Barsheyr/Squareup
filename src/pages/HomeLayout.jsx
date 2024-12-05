import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Footer } from "../components";

const HomeLayout = () => {
  return (
    <div className="font-primary bg-primary">
      <Navbar />
      {/* <Loading /> */}
      <section className="align-element py-20 font-primary">
        <Outlet />
      </section>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
