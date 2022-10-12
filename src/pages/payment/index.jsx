import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Iconcard from "../../assets/img/cardicon.png";
import Iconbank from "../../assets/img/bankicon.png";
import Iconretail from "../../assets/img/retailicon.png";
import Iconmoney from "../../assets/img/moneyicon.png";
function Payment() {
  return (
    <div>
      <Header />
      <div className="container-fluid bg-light py-5">
        <div className="container bg-white">
          <div className="row mt-3">
            <div className="left d-flex flex-column  justify-content-center col-md-6 col">
              <h5 className="mb-5 mt-3 mx-2">Payment Method</h5>
              <div className="row row-md-3 mb-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img src={Iconcard} alt="" />
                    Card
                  </label>
                </div>
              </div>
              <div className="row row-md-3 mb-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img src={Iconbank} alt="" />
                    Bank Transfer
                  </label>
                </div>
              </div>
              <div className="row row-md-3 mb-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img src={Iconretail} alt="" />
                    Retail
                  </label>
                </div>
              </div>
              <div className="row row-md-3 mb-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img src={Iconmoney} alt="" />
                    E-Money
                  </label>
                </div>
              </div>
            </div>
            <div className="right col col-md-6 bg-white">
              <h5 className="mb-5 mt-3 mx-2">Ticket Detail</h5>

              <div className="row">
                <div className="row">Event</div>
                <div className="row">Ticket Section</div>
                <div className="row">Quantity</div>
                <div className="row">Total Payment</div>
                <button className="btn btn-primary mt-5"> Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Payment Page</h1>
      <Footer />
    </div>
  );
}

export default Payment;
