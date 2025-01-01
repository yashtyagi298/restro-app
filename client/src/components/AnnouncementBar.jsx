import React from "react";

const AnnouncementBar = ({text}) => {
  return (
    <div className="bg-slate-700 text-white flex overflow-hidden ">
      <marquee className="text-sm font-inter animate-marquee space-x-8 lg:text-xl">
       {text}
      </marquee>
    </div>
  );
};

export default AnnouncementBar;
