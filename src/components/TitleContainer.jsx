import React from "react";
import info from "../assets/img/info.png";
import play from "../assets/img/play.png";

const TitleContainer = ({ title, description }) => {
  return (
    <div className="pt-[10%] px-12 absolute bg-gradient-to-r from-black w-full aspect-video text-white ">
      <h1 className="font-bold text-2xl mb-2">{title}</h1>
      <p className="w-1/3">{description}</p>
      <div className="flex font-semibold my-4">
        <button className="bg-white px-4 py-1 flex justify-center items-center hover:bg-opacity-80 rounded-sm text-black mr-4">
          <img className="w-6" src={play} /> <p className="pl-1">Play</p>
        </button>
        <button className="bg-slate-600 px-4 py-2 flex justify-center items-center hover:bg-opacity-80 rounded-sm text-white">
          <img className="w-6" src={info} />
          <p className="pl-1">More info</p>
        </button>
      </div>
    </div>
  );
};

export default TitleContainer;
