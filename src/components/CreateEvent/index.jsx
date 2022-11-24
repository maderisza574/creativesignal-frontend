import Header from "../Header";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import ListEvent from "../../components/ListEvent";
import "./index.css";
// import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

// import { getDataEvent } from "../../stores/actions/event";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
function CreateEvent() {
  const [show, setShow] = useState(false);

  const [data, setData] = useState([]);
  console.log(data);
  // const navigate = useNavigate();
  // const ManageEvent = () => {
  //   navigate("/manage-event");
  // };
  useEffect(() => {
    getDataEvent();
  }, []);
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
  const setUpdate = () => {
    setShow(true);
  };
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
                    <ListEvent data={item} setUpdate={setUpdate} />
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
                <div>
                  <form>
                    <label className="modal__name me-3">Name</label>
                    <br></br>
                    <input
                      type="text"
                      className="modal__input w-70"
                      name="name"
                      placeholder="Input Name Event"
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
                      name="name"
                      placeholder="Input Location"
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
                      name="name"
                      placeholder="Input Price"
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
                      name="name"
                      placeholder="Input Detail"
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
                      name="name"
                      placeholder="Input Category"
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
                      name="name"
                      placeholder="01/01/2022"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <form>
            <label className="me-3 mt-3">Input Image</label>
            <input type="file" className="w-100" name="image" />
            {/* {image && (
            )} */}
            <img src="" alt="view image" className="w-50" />
            <br></br>
            <button type="submit" className="w-50 btn btn-primary">
              Save
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}

export default CreateEvent;
