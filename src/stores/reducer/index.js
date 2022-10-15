import { combineReducers } from "redux";

import counter from "./counter";
import product from "./event";

export default combineReducers({
  product,
  counter,
});
