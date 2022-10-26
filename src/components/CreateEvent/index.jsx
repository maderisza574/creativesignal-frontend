import Header from "../Header";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import ListEvent from "../../components/ListEvent";
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
                <div className="col text-left">Manage Event</div>
                <div className="col col-md-3 ">
                  <button className="btn btn-primary" onClick={handleShow}>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="me-3">Input Name</label>
            <input type="text" className="w-100" name="name" />
            <label className="me-3">Input Category</label>
            <input type="text" className="w-100" name="category" />
            <label className="me-3 mt-3">Input Location</label>
            <input type="text" className="w-100" name="location" />
            <label className="me-3 mt-3">Input Detail</label>
            <input type="text" className="w-100" name="detail" />
            <label className="me-3 mt-3">Input Date Time Show</label>
            <input type="text" className="w-100" name="dateTimeShow" />
            <label className="me-3 mt-3">Input Price</label>
            <input type="text" className="w-100" name="price" />
            <label className="me-3 mt-3">Input Image</label>
            <input type="file" className="w-100" name="image" />
            {/* {image && (
            )} */}
            <img src="" alt="view image" className="w-50" />

            <button type="submit" className="w-100 my-5 btn btn-primary">
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
