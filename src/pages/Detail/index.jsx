import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Martin from "../../assets/img/martin.png";
import Avatar from "../../assets/img/avatarevent.png";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Map from "../../assets/img/map.png";
function Detail() {
  const { eventid } = useParams();
  const userid = localStorage.getItem("idUser");
  const [form, setForm] = useState({
    eventId: eventid,
    userid: userid,
  });
  console.log(form);
  const [wishlist, setwishlist] = useState(false);
  console.log(setForm);
  console.log(eventid);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getDataProduct();
  }, []);
  const getDataProduct = async () => {
    try {
      const result = await axios.get(`api/event/${eventid}`);
      console.log(result);
      setData(result.data.data);

      // console.log(result);
    } catch (error) {
      // console.error(error);
    }
  };
  // Navigasi

  const navigate = useNavigate();
  console.log(eventid);
  const handleOrder = () => {
    navigate("/order", {
      state: {
        eventId: eventid,
      },
    });
  };

  const Addwishlist = async () => {
    try {
      const result = await axios.post("api/wishlist", form);
      setwishlist(!wishlist);
      console.log(result);

      alert(result.data.message);
    } catch (error) {
      console.log(error.response);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <Header />
      <div className="container-fluid py-5 bg-light">
        <div className="container bg-white">
          <div className="row mt-3">
            <div className="left d-flex flex-column align-items-center justify-content-center col-md-6 col">
              <div className="card border-0 mt-3">
                <img
                  src={`https://res.cloudinary.com/maderisza/image/upload/v1663492332/${data[0]?.image}`}
                  width="100px"
                  height="500px"
                  className="card card-img"
                />
              </div>
              <button className="wishlist btn btn-white" onClick={Addwishlist}>
                {wishlist ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                )}
                Add to wishlist
              </button>
            </div>
            <div className="right py-5 col-md-6">
              <div className="tittle col-6 mb-3">{data[0]?.name}</div>
              <div className="d-flex flex-row mb-3">
                <div className="col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  {data[0]?.location}
                </div>
                <div className="col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  {data[0]?.dateTimeShow}
                </div>
              </div>
              <h5 className="mb-2">Attendees</h5>
              <img src={Avatar} />
              <h3 className="mb-2">Event Detail</h3>
              <p>{data[0]?.detail}</p>
              <h6 className="text-primary">Read more</h6>
              <div className="card">
                <h3>Location</h3>
                <img src={Map} width="200px" height="100px" alt="" />
              </div>
              {/* map */}
              {/* <div id="googleMap" style="width: 50%; height: 100px"></div>
              <script>
              function myMap() {
                var mapProp = {
                  center: new google.maps.LatLng(51.508742, -0.12085),
                  zoom: 5,
                };
                var map = new google.maps.Map(
                  document.getElementById("googleMap"),
                  mapProp
                );
              }
            </script>
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script> */}
              {/* endmap */}
              <div className="d-grid gap-2 col-6 mt-4">
                <button onClick={handleOrder} className="btn btn-primary">
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}

      <Footer />
    </div>
  );
}

export default Detail;
