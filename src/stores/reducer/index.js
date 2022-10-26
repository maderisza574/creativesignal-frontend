import { combineReducers } from "redux";

import counter from "./counter";
import product from "./event";
// untuk menabahkan route nya
export default combineReducers({
  product,
  counter,
});
