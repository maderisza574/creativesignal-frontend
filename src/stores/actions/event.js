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

// export const updateDataProduct = (data, id) => {
//   return {
//     type: "UPDATE_DATA_PRODUCT",
//     payload: axios.patch(`product/${id}`, data),
//   };
// };

// export const deleteDataProduct = (id) => {
//   return {
//     type: "DELETE_DATA_PRODUCT",
//     payload: axios.delete(`product/${id}`),
//   };
// };
