import { applyMiddleware, createStore } from "redux";
import RootReducer from "./RootReducer.jsx";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// middleware for
const middleware = [thunk];

// create  store instance
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// export store instance
export default Store;
