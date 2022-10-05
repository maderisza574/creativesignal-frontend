import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Martin from "../../assets/img/martin.png";
import Avatar from "../../assets/img/avatarevent.png";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const handleOrder = () => {
    navigate("/order", {
      state: {
        eventId: id,
      },
    });
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
                  src={Martin}
                  width="100px"
                  height="500px"
                  className="card card-img"
                />
              </div>
              <h5 className="text-center mt-3">
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
                Add to wishlist
              </h5>
            </div>
            <div className="right py-5 col-md-6">
              <div className="tittle col-6 mb-3">Sight Sounds exhibition</div>
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
                  Jakarta,Indonesia
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
                  Wed,15 Nov,04.00 PM
                </div>
              </div>
              <h5 className="mb-2">Attendees</h5>
              <img src={Avatar} />
              <h3 className="mb-2">Event Detail</h3>
              <p>
                After his controvesial art exhibition Tear and Consume back in
                November 2018,in which guests were invited to tear up
              </p>
              <h6 className="text-primary">Read more</h6>
              <h3>Location</h3>
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
