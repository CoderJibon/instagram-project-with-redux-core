import { createBrowserRouter } from "react-router-dom";
import LogoutRedirect from "./LogoutRedirect.jsx";
import LoginRedirect from "./LoginRedirect.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Home from "../pages/Home/Home.jsx";

// create browser router
const PublicRoute = createBrowserRouter([
  {
    element: <LogoutRedirect />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
  {
    element: <LoginRedirect />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

//export default browserRouter
export default PublicRoute;
