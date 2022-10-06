import "./index.css";

// import stanlee from "../../assets/img/stanlee.png";
import { useEffect, useState } from "react";
import moment from "moment";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../assets/img/banner.png";
import { useNavigate } from "react-router-dom";
import CardEvent from "../../components/Cardevent";
import axios from "../../utils/axios";
// import Findicon from "../../assets/img/findicon.png";

function Landing() {
  const navigate = useNavigate();
  // const data = [
  //   { id: 1, name: "Tea", category: "Drink" },
  //   { id: 2, name: "Milk", category: "Drink" },
  //   { id: 3, name: "Coffee", category: "Drink" },
  // ];
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [dateShow, setDateShow] = useState(moment().format("YYYY-MM-DD")); // 2022-10-04
  const [listDateShow, setListDateShow] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    getDataProduct();
  }, [page]);
  useEffect(() => {
    generateDate();
  }, [dateShow]);
  useEffect(() => {
    // console.log("search is update");
    getDataProduct();
  }, [page, searchName]);
  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        `api/event?page=${page}&limit=4&name=${searchName}&sort=&datetimeShow=${dateShow}`
      );
      setData(result.data.data);
      setPagination(result.data.pagination);

      // console.log(result);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  // end pagination

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
  console.log("DATE ACTIVE = " + dateShow);
  const handleSearchNAme = () => {
    setSearchName(keyword);
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
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Where"
                        className="form-control border-top-0 border-bottom-0"
                      />
                      <button onClick={handleSearchNAme}>Search</button>
                      <div className="btn btn-primary">&#10140;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end banner */}

        {listDateShow.map((item, index) => (
          <button
            key={index}
            style={{ margin: "0 10px" }}
            className={index === 2 ? "active" : ""}
            onClick={() => selectDate(moment(item).format("YYYY-MM-DD"))}
          >
            <div>{moment(item).format("DD")}</div>
            <small>{moment(item).format("ddd")}</small>
          </button>
        ))}

        {/* button */}
        <div className="col-3 rounded-pill bg-pink p-1 text-center mx-auto">
          <div className="text-pink letter-spacing fw-bold">&#8212; EVENT</div>
        </div>
        <div className="card px-0">
          <h5 className="text-center mt-3">events for you</h5>
          <div className="d-flex gap-2 mb-5 justify-content-center">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id}>
                  <CardEvent
                    data={item}
                    newData="Data Baru nih"
                    handleDetail={handleDetail}
                  />
                </div>
              ))
            ) : (
              <div className="text-center">
                <h3>Data Not Found !</h3>
              </div>
            )}
            {/* end card */}
          </div>
          <div className="d-flex gap-2 justify-content-center w-100 my-5">
            <button className="btn btn-primary" onClick={handlePrevPage}>
              &lt;
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextPage}
              disabled={page === pagination.totalPage ? true : false}
            >
              &gt;
            </button>
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
