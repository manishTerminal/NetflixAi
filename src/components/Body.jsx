import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import appRoute from "../routes/Routes";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        console.log(uid + "-" + email + "-" + displayName);
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="max-w-screen-2xl w-full">
      <RouterProvider router={appRoute}></RouterProvider>
    </div>
  );
}

export default Body;
