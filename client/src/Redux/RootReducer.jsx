import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer/AuthReducer.js";

// combineReducers
const RootReducer = combineReducers({
  auth: AuthReducer,
});

//export default combineReducers
export default RootReducer;
