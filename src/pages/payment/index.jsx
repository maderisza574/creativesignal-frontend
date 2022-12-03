import React from "react";
import axios from "../../utils/axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Iconcard from "../../assets/img/cardicon.png";
import Iconbank from "../../assets/img/bankicon.png";
import Iconretail from "../../assets/img/retailicon.png";
import Iconmoney from "../../assets/img/moneyicon.png";
// import { getDataEvent } from "../../stores/actions/event";
// import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

function Payment() {
  // const event = useSelector((state) => state.event);
  // console.log(event);
  const { state } = useLocation();
  const userId = localStorage.getItem("idUser");
  // const [data, setData] = useState({});
  const databooking = {
    userid: userId,
    eventid: state.eventId,
    totalTicket: state.dataOrder[0].qty,
    totalPayment: state.dataOrder[0].price,
    paymentmethod: "midtrans",
    statuspayment: true,
  };
  console.log(databooking);
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
                <div className="row">
                  Event
                  <div className="col">{state.dataEvent[0]?.name}</div>
                </div>
                <div className="row">
                  Ticket Section
                  <div className="col info__payment">
                    {state.dataOrder[0]?.seat}
                  </div>
                </div>
                <div className="row">
                  Quantity
                  <div className="col info__payment">
                    {state.dataOrder[0]?.qty}
                  </div>
                </div>
                <div className="row">
                  Total Payment
                  <div className="col info__payment">
                    {state.dataOrder[0]?.price}
                  </div>
                </div>
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
