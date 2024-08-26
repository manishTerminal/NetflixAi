import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import appRoute from "../routes/Routes";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";

function Body() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        console.log(uid + "-" + email + "-" + displayName);
      } else {
        // User is signed out
        // ...
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
