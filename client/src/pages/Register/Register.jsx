import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../helper/Alert.jsx";
import { useDispatch } from "react-redux";
import { registration } from "../../Redux/AuthReducer/ActionReducer.js";

const Register = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegelationSubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.username || !input.password || !input.email) {
      Alert("warn", "All fields are required!.");
    } else {
      dispatch(registration(input, setInput));
    }
  };

  return (
    <>
      <div className="main">
        <div className="body">
          <h2>Instragram</h2>
          <h4>
            Sign up to see photos and videos <br /> from your friends.
          </h4>
          <div className="fb">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <p>Log in with Facebook</p>
          </div>
          <div className="or">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <form onSubmit={handleRegelationSubmit}>
            <div className="input">
              <input
                value={input.email}
                onChange={handleInputChange}
                name="email"
                type="text"
                placeholder="Email Address"
              />
              <input
                onChange={handleInputChange}
                value={input.name}
                name="name"
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleInputChange}
                value={input.username}
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Username"
              />
              <input
                onChange={handleInputChange}
                value={input.password}
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
              />
            </div>
            <div className="text">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram. <span>Learn More</span>
              </p>
              <p>
                By signing up, you agree to our Terms , Privacy Policy and{" "}
                <span>Cookies Policy</span>
              </p>
            </div>
            <div className="button">
              <button type="submit">Sing up</button>
            </div>
          </form>
        </div>

        <div className="login">
          <p>
            Have an account?
            <span>
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </div>

        <div className="app">
          <p>Get the app.</p>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/2560px-Get_it_from_Microsoft_Badge.svg.png" />
            <img src="https://img.favpng.com/11/14/6/google-play-app-store-android-mobile-app-download-png-favpng-EL5i44009YQW6tym0064f3SJ5.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
