import { useEffect } from "react";
import "./App.css";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { userMe } from "./Redux/AuthReducer/ActionReducer.js";

function App() {
  const dispatch = useDispatch();
  const token = cookie.get("accessToken");

  useEffect(() => {
    if (token) {
      dispatch(userMe(token));
    }
  }, [dispatch, token]);

  return <></>;
}

export default App;
