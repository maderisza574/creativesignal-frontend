import axios from "../../utils/axios";

export const getDataUser = (userid) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`api/user/${userid}`),
  };
};
