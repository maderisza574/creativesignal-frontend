import "./index.css";

// import stanlee from "../../assets/img/stanlee.png";
import { useEffect, useState } from "react";
import moment from "moment";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../assets/img/banner.png";
import event from "../../assets/img/martin.png";
import avatar from "../../assets/img/avatarevent.png";
// import Findicon from "../../assets/img/findicon.png";

function Landing() {
  const [dateShow, setDateShow] = useState(moment().format("YYYY-MM-DD")); // 2022-10-04
  const [listDateShow, setListDateShow] = useState([]);

  useEffect(() => {
    generateDate();
  }, [dateShow]);
  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, "days"),
      moment(dateShow).subtract(1, "days"),
      dateShow,
      moment(dateShow).subtract(-1, "days"),
      moment(dateShow).subtract(-2, "days"),
    ];
    setListDateShow(listDate);
  };
  const selectDate = (date) => {
    setDateShow(date);
  };

  return (
    <>
      {/* START HEADER */}
      <Header />
      {/* END HEADER */}

      {/* START MAIN */}
      <main>
        <div className="card mb-5 rounded-0 ">
          <img src={Banner} alt="banner" className="card-img" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-6">
                  <h1 className="card-title text-white">
                    Find event you
                    <br /> love with our
                  </h1>

                  <div className="card mt-5">
                    <div className="input-group py-2 px-2">
                      <input
                        type="text"
                        placeholder="Search event"
                        className="form-control border-0"
                      />
                      <input
                        type="text"
                        placeholder="Where"
                        className="form-control border-top-0 border-bottom-0"
                      />
                      <div className="btn btn-primary">&#10140;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end banner */}
          <div className="App justify-content-center">
            <hr />
            {listDateShow.map((item, index) => (
              <button
                key={index}
                style={{ margin: "0 10px" }}
                className={index === 2 ? "active" : ""}
                onClick={() => {
                  selectDate(moment(item).format("YYYY-MM-DD"));
                }}
              >
                <div>{moment(item).format("DD")}</div>
                <small>{moment(item).format("ddd")}</small>
              </button>
            ))}
          </div>
        </div>
        {/* button */}
        <div className="col-3 rounded-pill bg-pink p-1 text-center mx-auto">
          <snap className="text-pink letter-spacing fw-bold">
            &#8212; EVENT
          </snap>
        </div>
        <div className="card px-0">
          <h5 className="text-center mt-3">events for you</h5>
          <div className="d-flex gap-2 mb-5 justify-content-center">
            <div className="card crdevent border-0 width:260px; cursor: pointer">
              <img src={event} alt="image event" className="card-img h-100" />
              <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
                <h6 className="card-title text-white">Card Tiitle</h6>
                <p className="card-text text-white">Progressive House Music</p>
                <img src={avatar} alt="" className="crdava" />
              </div>
            </div>
            <div className="card crdevent border-0 width:260px; cursor: pointer">
              <img src={event} alt="image event" className="card-img h-100" />
              <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
                <h6 className="card-title text-white">Card Tiitle</h6>
                <p className="card-text text-white">Progressive House Music</p>
                <img src={avatar} alt="" className="crdava" />
              </div>
            </div>
            <div className="card crdevent border-0 width:260px; cursor: pointer">
              <img src={event} alt="image event" className="card-img h-100" />
              <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
                <h6 className="card-title text-white">Card Tiitle</h6>
                <p className="card-text text-white">Progressive House Music</p>
                <img src={avatar} alt="" className="crdava" />
              </div>
            </div>
            <div className="card crdevent border-0 width:260px; cursor: pointer">
              <img src={event} alt="image event" className="card-img h-100" />
              <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
                <h6 className="card-title text-white">Card Tiitle</h6>
                <p className="card-text text-white">Progressive House Music</p>
                <img src={avatar} alt="" className="crdava" />
              </div>
            </div>
            <div className="card crdevent border-0 width:260px; cursor: pointer">
              <img src={event} alt="image event" className="card-img h-100" />
              <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
                <h6 className="card-title text-white">Card Tiitle</h6>
                <p className="card-text text-white">Progressive House Music</p>
                <img src={avatar} alt="" className="crdava" />
              </div>
            </div>
            {/* end card */}
          </div>
          <div className="d-flex gap-2 justify-content-center w-100 my-5">
            <button className="btn btn-primary">&lt;</button>
            <button className="btn btn-primary">&gt;</button>
          </div>
        </div>
      </main>
      {/* END MAIN */}

      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  );
}

export default Landing;
