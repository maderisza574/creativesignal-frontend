import axios from "../../utils/axios";

export const getDataEvent = () => {
  return {
    type: "GET_DATA_EVENT",
    payload: axios.get(`api/event?page=&limit=&name=&sort=&dateTimeShow=`),
  };
};

export const createDataEvent = (data) => {
  return {
    type: "CREATE_DATA_EVENT",
    payload: axios.post("api/event/createevent", data),
  };
};

export const updateDataEvent = (data, eventid) => {
  return {
    type: "UPDATE_DATA_EVENT",
    payload: axios.patch(`api/event/${eventid}`, data),
  };
};

// export const deleteDataProduct = (id) => {
//   return {
//     type: "DELETE_DATA_PRODUCT",
//     payload: axios.delete(`product/${id}`),
//   };
// };
