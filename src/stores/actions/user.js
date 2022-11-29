import axios from "../../utils/axios";

export const getDataUser = (userid) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`api/user/${userid}`),
  };
};
export const updateDataUser = (userid, form) => {
  return {
    type: "UPDATE_USER_BY_ID",
    payload: axios.patch(`api/user/${userid}`, form),
  };
};
