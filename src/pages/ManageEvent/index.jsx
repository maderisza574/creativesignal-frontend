import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CardEvent from "../../components/Cardevent";

import { useSelector, useDispatch } from "react-redux";
import {
  getDataEvent,
  createDataEvent,
  // updateDataProduct,
} from "../../stores/actions/event";

export default function ManageEvent() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [productId, setProductId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  console.log(productId);
  useEffect(() => {
    dispatch(getDataEvent());
  }, []);

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

  const setUpdate = (data) => {
    setIsUpdate(true);
    setProductId(data.id);
    setForm({
      name: data.name,
      price: data.price,
      image: data.image,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    // dispatch(updateDataProduct(formData, productId)).then(() => {
    //   dispatch(getDataProduct());
    //   setIsUpdate(false);
    //   resetForm();
    //   setTimeout(() => {
    //     dispatch({ type: "RESET_MESSAGE" });
    //   }, 3000);
    // });
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
  // fungsi untuk gambar dan input
  return (
    <>
      <Header />
      <div className="card container p-4">
        <h1 className="text-center">ManageEvent</h1>
        <hr />
        {product.message && (
          <div
            className={
              "alert alert-dismissible fade show " + product.isError
                ? "alert-danger"
                : "alert-primary"
            }
            role="alert"
          >
            {product.message}
          </div>
        )}

        <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
          <label className="me-3">Input Name</label>
          <input
            type="text"
            className="w-100"
            name="name"
            onChange={handleChangeForm}
            value={form.name}
          />
          <label className="me-3">Input Category</label>
          <input
            type="text"
            className="w-100"
            name="category"
            onChange={handleChangeForm}
            value={form.category}
          />
          <label className="me-3 mt-3">Input Location</label>
          <input
            type="text"
            className="w-100"
            name="location"
            onChange={handleChangeForm}
            value={form.location}
          />
          <label className="me-3 mt-3">Input Detail</label>
          <input
            type="text"
            className="w-100"
            name="detail"
            onChange={handleChangeForm}
            value={form.detail}
          />
          <label className="me-3 mt-3">Input Date Time Show</label>
          <input
            type="text"
            className="w-100"
            name="dateTimeShow"
            onChange={handleChangeForm}
            value={form.dateTimeShow}
          />
          <label className="me-3 mt-3">Input Price</label>
          <input
            type="text"
            className="w-100"
            name="price"
            onChange={handleChangeForm}
            value={form.price}
          />
          <label className="me-3 mt-3">Input Image</label>
          <input
            type="file"
            className="w-100"
            name="image"
            onChange={handleChangeForm}
          />
          {image && <img src={image} alt="view image" />}

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
      </div>
      <main className="container d-flex gap-3 my-5">
        {product.data.length > 0 ? (
          product.data.map((item) => (
            <div key={item.id}>
              <CardEvent data={item} setUpdate={setUpdate} />
            </div>
          ))
        ) : (
          <h1>Data Not Found !</h1>
        )}
      </main>
      <button onClick={setUpdate}></button>
      <Footer />
    </>
  );
}
