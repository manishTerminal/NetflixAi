import React from "react";
import netflixLogo from "../assets/img/Netflix_Logo_PMS.png";
import user from "../assets/img/user.png";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("user logged out")
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-20 flex justify-between">
      <div>
        <img className="w-48 mt-2 ml-36" src={netflixLogo} />
      </div>
      <div className="flex justify-center items-center mr-4">
        <img className="w-12 h-12 m-2" src={user} />
        <button onClick={handleLogOut} className="text-white font-bold ">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
