import React from "react";
import netflixLogo from "../assets/img/Netflix_Logo_PMS.png";

function Header() {
  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-20">
      <img className="w-48 mt-2 ml-36" src={netflixLogo} />
    </div>
  );
}

export default Header;
