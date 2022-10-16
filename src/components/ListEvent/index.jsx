import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataEvent,
  createDataEvent,
  updateDataEvent,
} from "../../stores/actions/event";
export default function ListEvent(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  const [productId, setProductId] = useState("");
  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  console.log(image);
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);
  const handleDetail = () => {
    navigate(`/detail/${props.data.eventid}`);
  };
  useEffect(() => {
    dispatch(getDataEvent());
  }, []);

  const setUpdate = (data) => {
    setIsUpdate(true);
    setProductId(data.eventid);
    setForm({
      name: data.name,
      category: data.category,
      location: data.location,
      image: data.image,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    dispatch(updateDataEvent(formData, productId)).then(() => {
      dispatch(getDataEvent());
      setIsUpdate(false);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // HANYA DIGUNAKAN KETIKA INPUT ADA YANG BERTIPE DATA FILE
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
      console.log(data);
    }

    dispatch(createDataEvent(formData)).then(() => {
      dispatch(getDataEvent());
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };
  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      image: "",
    });
    setImage("");
  };

  const handleChangeForm = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const showDataImage = `https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`;
  return (
    <div className="row">
      <div className="col col-md-2">
        <div className=" bg-warning border rounded-3 text-center">
          15
          <br />
          wed
        </div>
      </div>
      <div className="col col-md-10 bg-warning">
        <h1>title {props.data.name}</h1>
        <h5>category{props.data.category}</h5>
        <h6>Date</h6>
        {/* <img
          className="card-img-top"
          src={`https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`}
          alt="Card image cap"
        /> */}
        <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
          <label className="me-3">Input Name</label>
          <input
            type="text"
            className="w-100"
            name="name"
            onChange={handleChangeForm}
            placeholder={props.data.name}
            value={form.name}
          />
          <label className="me-3">Input Category</label>
          <input
            type="text"
            className="w-100"
            name="category"
            onChange={handleChangeForm}
            placeholder={props.data.category}
            value={form.category}
          />
          <label className="me-3 mt-3">Input Location</label>
          <input
            type="text"
            className="w-100"
            name="location"
            onChange={handleChangeForm}
            placeholder={props.data.location}
            value={form.location}
          />
          <label className="me-3 mt-3">Input Detail</label>
          <input
            type="text"
            className="w-100"
            name="detail"
            placeholder={props.data.detail}
            onChange={handleChangeForm}
            value={form.detail}
          />
          <label className="me-3 mt-3">Input Date Time Show</label>
          <input
            type="text"
            className="w-100"
            name="dateTimeShow"
            onChange={handleChangeForm}
            placeholder={props.data.dateTimeShow}
            value={form.dateTimeShow}
          />
          <label className="me-3 mt-3">Input Price</label>
          <input
            type="text"
            className="w-100"
            name="price"
            onChange={handleChangeForm}
            placeholder={props.data.price}
            value={form.price}
          />
          <label className="me-3 mt-3">Input Image</label>
          <input
            type="file"
            className="w-100"
            name="image"
            onChange={handleChangeForm}
          />
          {/* {image && (
            )} */}
          <img src={showDataImage} alt="view image" className="w-50" />

          <button type="submit" className="w-100 my-5 btn btn-primary">
            {product.isLoading ? (
              <div className="spinner-border text-white" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <div>{isUpdate ? "Update" : "Save"}</div>
            )}
          </button>
        </form>
        <button className="btn text-primary" onClick={handleDetail}>
          Detail
        </button>
        {/* {props.manageEvent ? ( */}
        <>
          <button className="btn btn-secondary" onClick={setUpdate}>
            Update
          </button>
          <button className="btn btn-danger">Delete</button>
        </>
        {/* ) : (
          ""
        )} */}
      </div>
    </div>
  );
}
