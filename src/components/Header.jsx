import React, { useEffect } from "react";
import netflixLogo from "../assets/img/Netflix_Logo_PMS.png";
import user from "../assets/img/user.png";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

function Header() {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-20 flex justify-between">
      <div>
        <img className="w-48 mt-2 ml-8" src={netflixLogo} />
      </div>
      {selector && (
        <div className="flex justify-center items-center mr-4">
          <img
            className="w-12 h-12 m-2 cursor-pointer"
            src={user}
          />
          <button
            onClick={handleLogOut}
            className="text-white font-bold "
          >
            Log Out - {selector.displayName}
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
