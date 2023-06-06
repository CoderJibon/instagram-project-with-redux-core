import Alert from "../../helper/Alert.jsx";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTRATION_FAILED,
  USER_REGISTRATION_SUCCESS,
  VERIFY_USER_FAILED,
  VERIFY_USER_SUCCESS,
} from "./Actiontype.js";
import { initialState } from "./initialState.js";

// create Auth Reducer instance
const AuthReducer = (state = initialState, { type, payload, message = "" }) => {
  switch (type) {
    case USER_REGISTRATION_SUCCESS:
      Alert("success", message);
      return {
        ...state,
        message: message,
      };

    case USER_REGISTRATION_FAILED:
      Alert("error", message);
      return {
        ...state,
        error: message,
      };

    case USER_LOGIN_SUCCESS:
      Alert("success", message);
      return {
        ...state,
        user: payload,
        loginStatus: true,
        message: message,
      };

    case USER_LOGIN_FAILED:
      Alert("error", message);
      return {
        ...state,
        error: message,
        loginStatus: false,
      };

    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loginStatus: true,
      };

    case VERIFY_USER_FAILED:
      Alert("error", message);
      return {
        ...state,
        loginStatus: false,
        error: message,
      };

    case USER_LOGOUT_SUCCESS:
      Alert("success", message);
      return {
        ...state,
        user: null,
        loginStatus: false,
      };

    case USER_LOGIN_FAILED:
      Alert("error", message);
      return {
        ...state,
        loginStatus: false,
        error: message,
      };

    default:
      return state;
  }
};

//
export default AuthReducer;
