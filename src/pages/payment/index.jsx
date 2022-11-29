import React from "react";
import axios from "../../utils/axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Iconcard from "../../assets/img/cardicon.png";
import Iconbank from "../../assets/img/bankicon.png";
import Iconretail from "../../assets/img/retailicon.png";
import Iconmoney from "../../assets/img/moneyicon.png";

import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

function Payment() {
  const { state } = useLocation();
  // const [data, setData] = useState({});
  const databooking = {
    userid: "36329683-e8ae-4e9e-9d58-1f2616036552",
    eventid: state.eventId,
    totalTicket: 1,
    totalPayment: 200000,
    paymentmethod: "midtrans",
    statuspayment: true,
  };
  // HANDLE CREATE BOOKING 1 REQUEST
  const handlePayment = async () => {
    try {
      const result = await axios.post("api/booking", databooking);
      // setData(result.data.data.redirectUrl);
      alert(result.data.message);
      console.log(result.data.data.redirect_url);
      window.open(`${result.data.data.redirect_url}`, "_blank");
    } catch (error) {
      console.log(error);
    }
  };
  // const handlePayment = () => {
  //   // const dataOrder = [
  //   //   { seat: "REG2-9", qty: 1, price: 150000 },
  //   //   { seat: "VVIP2-1", qty: 2, price: 450000 },
  //   // ];
  //   // proses untuk menghitung total ticket dari state.dataOrder
  //   // proses untuk menghitung total payment dari state.dataOrder
  //   // proses untuk mengambil data section dari state.dataOrder = ["REG2-9", "VVIP2-1", "VVIP2-1"]
  //   const setData = {
  //     userId: "", // localStorage || store redux module user
  //     eventId: "", // state.eventId
  //     totalTicket: "", // olahan dari proses diatas
  //     totalPayment: "", // olahan dari proses diatas
  //     paymentMethod: "", // didapat dari payment method yang user pilih
  //     section: [], // olahan dari proses diatas
  //   };
  //   console.log(setData);

  //   // jika sudah akan lanjuut proses axios yang dimana melempar setData ke dalam request

  //   // with midtrans
  //   // response akan mendapatkan link url dari midtrans dan akan membuka tab baru dimana akan mengakses link yang tadi sudah didapat

  //   // withoutmidtrans
  //   // akan navigasi ke halaman mybooking/landing page
  // };
  console.log(state);
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
                <button
                  className="btn btn-primary mt-5"
                  onClick={handlePayment}
                >
                  {" "}
                  Submit
                </button>
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
