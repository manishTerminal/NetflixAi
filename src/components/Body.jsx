import React from "react";
import { RouterProvider } from "react-router-dom";
import appRoute from "../routes/Routes";

function Body() {
  return (
    <>
      <RouterProvider router={appRoute}></RouterProvider>
    </>
  );
}

export default Body;
