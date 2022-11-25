import Header from "../Header";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import ListEvent from "../../components/ListEvent";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { createDataEvent } from "../../stores/actions/event";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
// import moment from "moment/moment";

function CreateEvent() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  console.log(event);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  console.log(isUpdate);
  console.log(image);

  // const [showToast, setShowToast] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // console.log(isLoading);
  // console.log(form);

  const [data, setData] = useState([]);
  // console.log(data);
  // const navigate = useNavigate();
  // const ManageEvent = () => {
  //   navigate("/manage-event");
  // };
  useEffect(() => {
    getDataEvent();
  }, []);
  // const getData = () => {
  //   dispatch(getDataEvent());
  // };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getDataEvent = async () => {
    try {
      const result = await axios.get(
        `api/event?page=&limit=&name=&sort=&dateTimeShow=`
      );
      console.log(result.data.data);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
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

  const createEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
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
      category: "",
      location: "",
      detail: "",
      dateTimeShow: "",
      price: "",
      image: "",
    });
    setImage("");
  };

  // This for update

  return (
    <div>
      <Header />
      <div className="card px-0">
        <div className="row">
          <div className="left col col-md-3">
            <ProfileLeft />
          </div>
          <div className="right col bg-light py-5">
            <div className="container justify-content-center w-70 rounded bg-white ">
              <div className="row">
                <div className="col text-left mt-3">Manage Event</div>
                <div className="col col-md-3 ">
                  <button className="btn btn-primary mt-3" onClick={handleShow}>
                    Create
                  </button>
                </div>
              </div>

              {data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id}>
                    <ListEvent data={item} setUpdate={setIsUpdate} />
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <h3>Data Not Found !</h3>
                </div>
              )}
            </div>
          </div>
        </div>
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
                    <label className="modal__name me-3">Name</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input w-70"
                      name="name"
                      onChange={handleChangeForm}
                      placeholder="Input Name"
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
                      placeholder="Input Location"
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
                      placeholder="Input Price"
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
                      placeholder="Input Detail"
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
                      placeholder="Input Category"
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
                      placeholder="01/01/2022"
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

            <button className="btn btn-primary" onClick={createEventHandler}>
              Create
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}

export default CreateEvent;
