import Header from "../Header";
// import Johnicon from "../../assets/img/john.png";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import ListEvent from "../ListEvent";
import { useState, useEffect } from "react";
// import axios from "axios";
function CreateEvent() {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     // console.log("search is update");
  //     getDataEvent();
  //   }, [page, searchName, dateShow]);

  // const getDataEvent = async () => {
  //   try {
  //     const result = await axios.get(
  //       `api/event?page=${page}&limit=4&name=${searchName}&sort=&dateTimeShow=${dateShow}`
  //     );
  //     setData(result.data.data);
  //     setPagination(result.data.pagination);

  //     // console.log(result);
  //   } catch (error) {
  //     // console.error(error);
  //   }
  // };

  useEffect(() => {
    // dispatch(getDataEvent());
    setData(event.eventData);
  }, []);
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
                  <button className="btn btn-primary"> Create</button>
                </div>
              </div>
              {data.map((item) => (
                <div key={item.eventId}>
                  <ListEvent data={item} />
                </div>
              ))}
              {/* <ListEvent /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bg-danger"> */}

      {/* </div> */}
      <Footer />
    </div>
    //   </div>
    //   <h1>Profile Page</h1>
    // </div>
  );
}

export default CreateEvent;
