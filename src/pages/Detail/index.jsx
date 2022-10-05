import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Martin from "../../assets/img/martin.png";

function Detail() {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="container-fluid py-5 bg-light">
        <div className="container bg-white">
          <div className="row mt-3">
            <div className="left d-flex flex-column align-items-center justify-content-center col-md-6 col">
              <div className="card border-0">
                <img src={Martin} className="card-img h-100" />
              </div>
              <h5 className="text-center mt-3">Add to wishlist</h5>
            </div>
            <div className="right py-5 col-md-6">
              <div className="tittle col-6 mb-3">Sight Sounds exhibition</div>
              <div className="d-flex flex-row mb-3">
                <div className="col">Wed,15 Nov,04.00 PM</div>
                <div className="col">Jakarta,Indonesia</div>
              </div>
              <h5 className="mb-2">Attendees</h5>
              <div className="avatar">image avatar</div>
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
                <button className="btn btn-primary">Buy Ticket</button>
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
