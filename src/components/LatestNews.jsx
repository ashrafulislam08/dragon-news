import React from "react";

const LatestNews = () => {
  return (
    <div className="flex gap-3 bg-gray-200 items-center p-3">
      <p className="bg-[#D72050] text-white px-5 py-2 text-lg font-semibold">
        Latest
      </p>
      <marquee behavior="" direction="" className="font-bold text-xl">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </marquee>
    </div>
  );
};

export default LatestNews;
