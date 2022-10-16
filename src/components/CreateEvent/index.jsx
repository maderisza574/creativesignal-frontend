import Header from "../Header";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import ListEvent from "../../components/ListEvent";
import { useNavigate } from "react-router-dom";

// import { getDataEvent } from "../../stores/actions/event";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
function CreateEvent() {
  const [data, setData] = useState([]);
  console.log(data);
  const navigate = useNavigate();
  const ManageEvent = () => {
    navigate("/manage-event");
  };
  useEffect(() => {
    getDataEvent();
  }, []);
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
                  <button className="btn btn-primary" onClick={ManageEvent}>
                    Create
                  </button>
                </div>
              </div>
              {data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id}>
                    <ListEvent
                      data={item}
                      newData="data baru"
                      // handleDetail={handleDetail}
                    />
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

      <Footer />
    </div>
  );
}

export default CreateEvent;
