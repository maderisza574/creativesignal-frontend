import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
// useLocation,
import SeatPosition from "../../components/SeatPosition";
import axios from "../../utils/axios";

import ticketVVIP from "../../assets/img/VVIP.png";
import ticketVIP from "../../assets/img/VIP.png";
import ticketREG from "../../assets/img/REG.png";

import "./index.css";

function Order() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH

  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = async () => {
    try {
      const result = await axios.get(
        `api/booking/0bdf7f38-485c-42ca-8f99-7cc11789dbf6`
      );
      console.log(result);
      let dataFullSeat = result.data?.filter((item) => item.statusFull);
      //  dataFullSeat = [{
      //   section: "REG1-4",
      //   booked: 30,
      //   available: 0,
      //   statusFull: true,
      // }]
      dataFullSeat = dataFullSeat.map((item) => item.section);
      //  dataFullSeat = ["REG1-4"]
      setFullSeat(dataFullSeat);
      setListBooking(result.data);
    } catch (error) {
      console.log(error);
    }
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
  };

  const getDataEvent = async () => {
    try {
      const result = await axios.get(
        `api/event/0bdf7f38-485c-42ca-8f99-7cc11789dbf6`
      );
      console.log(result);
      setDataEvent(result.data);
    } catch (error) {
      console.log(error);
    }
    // https://www.notion.so/Modul-Event-413ecaad2dd04d4eb0c6c2afc4f50888
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    // activeSeat = ["VVIP1-1"]
    // dataOrder = [{seat: "VVIP1-1", qty: 1, price: 450000}]
    // seat = "VVIP1-1"
    // data[0] = "VVIP1"
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      // untuk memastikan seat yang di klik blm full seat
      if (activeSeat.includes(seat)) {
        // untuk mengecek apakah seat sudah masuk ke activeSeat
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0]?.includes("VVIP")
              ? dataEvent[0]?.price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0]?.includes("VIP")
              ? dataEvent[0]?.price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0]?.price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };

  const handleOrderSeat = () => {
    // console.log(dataOrder);
    navigate("/payment", {
      state: {
        dataOrder,
        eventId: state.eventId,
        // eventId: state.eventid,
      },
    });
  };

  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };

  const increaseOrderSeat = (section) => {
    // dataOrder = [{seat: "VVIP1-1", qty: 1, price: 450000}]
    // section = {seat: "VVIP1-1", qty: 1, price: 450000}
    // findData = {seat: "VVIP1-1", qty: 1, price: 450000}
    // price = 150000 * 3 = 450000

    // findData = {seat: "VVIP1-1", qty: 2, price: 900000}
    // dataOrder = [{seat: "VVIP1-1", qty: 2, price: 900000}]
    // setDataOrder(dataOrder)
    const findData = dataOrder.find((item) => item.seat === section.seat);
    const price = section.seat.includes("VVIP")
      ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
      : section.seat.includes("VIP")
      ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
      : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
    findData.qty += 1;
    findData.price = price * findData.qty;
    setDataOrder([...dataOrder]);
  };

  const decreaseOrderSeat = (section) => {
    // dataOrder = [{seat: "VVIP1-1", qty: 1, price: 450000}]
    // activeSeat = ["VVIP1-1"]
    // section = {seat: "VVIP1-1", qty: 2, price: 450000}
    // findData = {seat: "VVIP1-1", qty: 1, price: 450000}
    const findData = dataOrder.find((item) => item.seat === section.seat);
    if (findData.qty === 1) {
      // kondisi untuk mengecek qty jika 1 maka data seat akan di hapus
      const deleteData = dataOrder.filter((item) => item.seat !== section.seat);
      const deleteSeat = activeSeat.filter((item) => item !== section.seat);
      setDataOrder(deleteData);
      setActiveSeat(deleteSeat);
    } else {
      const price = section.seat.includes("VVIP")
        ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
        : section.seat.includes("VIP")
        ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
        : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
      findData.qty -= 1;
      findData.price = price * findData.qty;
      setDataOrder([...dataOrder]);
    }
  };

  return (
    <div>
      <Header />

      <div className="container">
        <div className="card card-order">
          <div className="row">
            <div className="col-sm-12 col-md-7 p-0 p-md-4">
              <div className="rotate-seat">
                <SeatPosition
                  width="70%" // MEMBERIKAN BESARAN PADA POLA SEAT
                  height="70%" // MEMBERIKAN TINGGI PADA POLA SEAT
                  fullSeat={fullSeat}
                  activeSeat={activeSeat}
                  handleSelectSeat={handleSelectSeat}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-5 p-0 p-md-4">
              <h4>Tickets</h4>
              {activeSeat.length > 0 ? (
                <div className="ticket-scrolling">
                  {/* dataOrder = [{seat: "VVIP1-1", qty: 1, price: 450000}] */}
                  {/* data[0] = "VVIP1" || data[1] = "1" */}
                  {/* dataSeat =  [{
                    section: "VVIP1-1",
                    booked: 5,
                    available: 5,
                    statusFull: false,
                  }] */}
                  {dataOrder.map((item, index) => {
                    const data = item.seat.split("-");
                    const dataSeat = listBooking.filter(
                      (itemSeat) => itemSeat.section === item.seat
                    );
                    return (
                      <div className="my-3" key={index}>
                        <img
                          src={
                            data[0].includes("VVIP")
                              ? ticketVVIP
                              : data[0].includes("VIP")
                              ? ticketVIP
                              : ticketREG
                          }
                          className="ticket-icon"
                          alt="ticket icon"
                        />
                        <label className="ms-3">
                          Section {data[0]}, Row {data[1]} - $ {item.price}
                          <br />[
                          {dataSeat.length > 0
                            ? dataSeat[0].available
                            : data[0].includes("VVIP")
                            ? 10
                            : data[0].includes("VIP")
                            ? 20
                            : 30}{" "}
                          Seats Available]
                        </label>
                        <br />
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => decreaseOrderSeat(item)}
                        >
                          -
                        </button>
                        <h5 className="d-inline mx-2">{item.qty}</h5>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => increaseOrderSeat(item)}
                        >
                          +
                        </button>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-center h-50">
                  <h6>Select Seat</h6>
                </div>
              )}
              <hr />
              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={handleOrderSeat}>
                  Checkout
                </button>
                <button className="btn btn-danger" onClick={clearOrderSeat}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Order;
