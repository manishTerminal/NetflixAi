import React from "react";
import { RouterProvider } from "react-router-dom";
import appRoute from "../routes/Routes";

function Body() {
  return (
    <div>
      <RouterProvider router={appRoute}></RouterProvider>
    </div>
  );
}

export default Body;
