import { Navigate } from "react-router-dom";
import axios from "axios";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTRATION_FAILED,
  USER_REGISTRATION_SUCCESS,
  VERIFY_USER_FAILED,
  VERIFY_USER_SUCCESS,
} from "./Actiontype.js";

// user registration
export const registration = (input, setInput) => async (dispatch) => {
  try {
    await axios
      .post("//localhost:5050/api/v1/auth/registration", input)
      .then((response) => {
        setInput({
          name: "",
          username: "",
          email: "",
          password: "",
        });
        dispatch({
          type: USER_REGISTRATION_SUCCESS,
          message: response.data.message,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_REGISTRATION_FAILED,
          message: error?.response?.data?.message,
        });
      });
  } catch (error) {
    console.error(error.message);
  }
};

// user login
export const login = (input, setInput, Navigate) => async (dispatch) => {
  try {
    await axios
      .post("//localhost:5050/api/v1/auth/login", input, {
        withCredentials: true,
      })
      .then((response) => {
        setInput({
          email: "",
          password: "",
        });
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: response?.data?.user,
          message: response.data?.message,
        });
        Navigate("/");
      })
      .catch((error) => {
        dispatch({
          type: USER_LOGIN_FAILED,
          message: error?.response?.data?.message,
        });
      });
  } catch (error) {
    console.error(error.message);
  }
};

// user me
export const userMe = (token) => async (dispatch) => {
  try {
    await axios
      .get("//localhost:5050/api/v1/auth/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
        withCredentials: true,
      })
      .then((response) => {
        dispatch({
          type: VERIFY_USER_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: VERIFY_USER_FAILED,
          message: error?.response?.data?.message,
        });
      });
  } catch (error) {
    console.error(error.message);
  }
};

// user Logout
export const logout = () => async (dispatch) => {
  try {
    await axios
      .get("//localhost:5050/api/v1/auth/logout", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch({
          type: USER_LOGOUT_SUCCESS,
          message: response?.data.message,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_LOGIN_FAILED,
          message: error?.response?.data?.message,
        });
      });
  } catch (error) {
    console.error(error.message);
  }
};
