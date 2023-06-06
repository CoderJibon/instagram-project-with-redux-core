import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import PublicRoute from "./Route/PublicRoute.jsx";
import { Provider } from "react-redux";
import Store from "./Redux/Store.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={PublicRoute} />
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
