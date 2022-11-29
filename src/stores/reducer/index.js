import { combineReducers } from "redux";

import counter from "./counter";
import product from "./event";
import user from "./user";
// untuk menabahkan route nya
export default combineReducers({
  product,
  counter,
  user,
});
