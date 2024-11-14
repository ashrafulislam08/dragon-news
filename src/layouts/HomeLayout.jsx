import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <section className="w-11/12 mx-auto">
        <LatestNews />
      </section>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">Main content</section>
        <aside className="col-span-3">right side</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
