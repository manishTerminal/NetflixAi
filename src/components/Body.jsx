import React from "react";
import { RouterProvider } from "react-router-dom";
import appRoute from "../routes/Routes";

function Body() {
  return (
    <div className="max-w-screen-2xl w-full">
      <RouterProvider router={appRoute}></RouterProvider>
    </div>
  );
}

export default Body;
