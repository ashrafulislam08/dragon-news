import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-3 bg-gray-200 items-center p-3">
      <p className="bg-[#D72050] text-white px-5 py-2 text-lg font-semibold">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nihil amet expedita illum nemo magni architecto odit facere velit
          voluptatem.
        </Link>
        <Link to="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nihil amet expedita illum nemo magni architecto odit facere velit
          voluptatem.
        </Link>
        <Link to="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nihil amet expedita illum nemo magni architecto odit facere velit
          voluptatem.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
