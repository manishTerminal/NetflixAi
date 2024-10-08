import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRoute;
