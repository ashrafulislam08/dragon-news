import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <section className="w-11/12 mx-auto">
        <LatestNews />
        <Navbar />
      </section>
    </div>
  );
};

export default HomeLayout;
