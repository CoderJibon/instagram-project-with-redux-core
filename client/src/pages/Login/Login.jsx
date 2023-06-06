import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../helper/Alert.jsx";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/AuthReducer/ActionReducer.js";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!input.email && !input.password) {
      Alert("error", "All fields are required");
    } else {
      dispatch(login(input, setInput, Navigate));
    }
  };
  return (
    <>
      <div className="main">
        <div className="body">
          <h2>Instagram</h2>
          <div className="fb">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <p>Log in with Facebook</p>
          </div>
          <div className="or">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <form onSubmit={handleOnSubmit}>
            <div className="input">
              <input
                onChange={handleInputChange}
                name="email"
                type="text"
                value={input.email}
                placeholder="email"
              />
              <input
                onChange={handleInputChange}
                name="password"
                value={input.password}
                autoComplete="current-password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="button">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>

        <div className="login">
          <p>
            I don't have any account?
            <span>
              <Link to="/registration">Sing up</Link>
            </span>
          </p>
        </div>

        <div className="app">
          <p>Get the app.</p>
          <div>
            <img src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/2560px-Get_it_from_Microsoft_Badge.svg.png" />
            <img src="https://img.favpng.com/11/14/6/google-play-app-store-android-mobile-app-download-png-favpng-EL5i44009YQW6tym0064f3SJ5.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
