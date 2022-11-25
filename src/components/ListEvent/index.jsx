import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
// import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { getDataEvent, updateDataEvent } from "../../stores/actions/event";

export default function ListEvent(props) {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  console.log(event);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  console.log(isUpdate);
  const eventid = props.data.eventid;
  // const [eventid, setEventId] = useState("");
  console.log(eventid);

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventid}`);
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
  // const setUpdate = (data) => {
  //   props.data.dateTimeShow = new Date();
  //   setForm({
  //     name: props.data.name,
  //     price: props.data.price,
  //     dateTimeShow: moment(props.data.dateTimeShow).format("YYY-MM-DD"),
  //     image: data.image,
  //     category: props.data.category,
  //     location: props.data.location,
  //     detail: props.data.detail,
  //   });
  // };
  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      location: "",
      detail: "",
      dateTimeShow: "",
      price: "",
      image: "",
    });
    setImage("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    dispatch(updateDataEvent(formData, eventid)).then(() => {
      dispatch(getDataEvent());
      setIsUpdate(false);
      // setEventId(props.data.eventid);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  // const showDataImage = `https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`;
  return (
    <div className="row">
      <div className="col col-md-2">
        <div className="border rounded-3 text-center">
          15
          <br />
          wed
        </div>
      </div>
      <div className="col col-md-10">
        <h1>{props.data.name}</h1>
        <h5>{props.data.category}</h5>
        <h6>{props.data.dateTimeShow}</h6>
        {/* <img
          className="card-img-top"
          src={`https://res.cloudinary.com/maderisza/image/upload/v1663492332/${props.data.image}`}
          alt="Card image cap"
        /> */}

        <button className="btn text-primary" onClick={handleDetail}>
          Detail
        </button>
        {/* {props.manageEvent ? ( */}
        <>
          <button
            className="btn btn-secondary"
            // onClick={() => props.setUpdate()}
            onClick={handleShow}
          >
            Update
          </button>
          <button className="btn btn-danger">Delete</button>
        </>
        {/* ) : (
          ""
        )} */}
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-md-6">
                {/* <p>{JSON.stringify(form)}</p> */}
                <div>
                  <form>
                    {/* <form onSubmit={isUpdate ? handleUpdate : createEventHandler}> */}
                    <label className="modal__name me-3">Name</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input w-70"
                      name="name"
                      onChange={handleChangeForm}
                      placeholder={props.data.name}
                    />
                  </form>
                </div>
                <div className="mt-3">
                  <form>
                    <label className="modal__name me-3">Location</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input w-70"
                      name="location"
                      placeholder={props.data.location}
                      onChange={handleChangeForm}
                    />
                  </form>
                </div>
                <div className="mt-3">
                  <form>
                    <label className="modal__name me-3">Price</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input w-70"
                      name="price"
                      placeholder={props.data.price}
                      onChange={handleChangeForm}
                    />
                  </form>
                </div>
                <div className="mt-3">
                  <form>
                    <label className="modal__name me-3">Detail</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input_detail w-70"
                      name="detail"
                      placeholder={props.data.detail}
                      onChange={handleChangeForm}
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mt-3">
                  <form>
                    <label className="modal__name me-3">Category</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input w-70"
                      name="category"
                      placeholder={props.data.category}
                      onChange={handleChangeForm}
                    />
                  </form>
                </div>
                <div className="mt-3">
                  <form>
                    <label className="modal__name me-3">Date Time Show</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input w-70"
                      name="dateTimeShow"
                      placeholder={props.data.dateTimeShow}
                      onChange={handleChangeForm}
                    />
                  </form>
                </div>
              </div>
            </div>
            <label className="mt-3">Input Image</label>
            <input
              type="file"
              className="modal__input w-70"
              name="image"
              onChange={handleChangeForm}
            />
            {image && <img src={image} alt="view image" />}
            {/* <button type="submit" className="w-100 my-5 btn btn-primary">
              {event.isLoading ? (
                <div className="spinner-border text-white" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                <div>{isUpdate ? "Update" : "Save"}</div>
              )}
            </button> */}

            <button className="btn btn-warning" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
