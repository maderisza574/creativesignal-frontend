import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useLocation } from "react-router-dom";
// new import
import "./example.css";
import { useState, useEffect } from "react";
import SeatPosition from "../../components/SeatPosition";
import ticketREG from "../../assets/img/REG.png";
import ticketVIP from "../../assets/img/VIP.png";
import ticketVVIP from "../../assets/img/VVIP.png";

function Order() {
  // NEW ADD
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT
  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = () => {
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
    const DATADUMMY = {
      status: 200,
      message: "Success Get Data Section By Event Id",
      data: [
        {
          section: "REG1-1",
          booked: 20,
          available: 10,
          statusFull: false,
        },
        {
          section: "REG1-2",
          booked: 15,
          available: 15,
          statusFull: false,
        },
        {
          section: "REG1-3",
          booked: 0,
          available: 30,
          statusFull: false,
        },
        {
          section: "REG1-4",
          booked: 30,
          available: 0,
          statusFull: true,
        },
      ],
    };
    let dataFullSeat = DATADUMMY.data.filter((item) => item.statusFull);
    dataFullSeat = dataFullSeat.map((item) => item.section);
    setFullSeat(dataFullSeat);
    setListBooking(DATADUMMY.data);
  };

  const getDataEvent = () => {
    // https://www.notion.so/Modul-Event-413ecaad2dd04d4eb0c6c2afc4f50888
    const DATADUMMY = {
      status: 200,
      message: "Success Get Event By Id",
      data: [
        {
          eventId: "e29b8308-d23d-42f0-9071-639403c0c451",
          name: "We The Fest",
          category: "Music",
          location: "Jakarta",
          detail: "Lorem ipsum dolor amet",
          dateTimeShow: "2022-01-01 10:00:00",
          price: 150000,
        },
      ],
    };
    setDataEvent(DATADUMMY.data);
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
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
            price: data[0].includes("VVIP")
              ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0].price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };

  const handleOrderSeat = () => {
    console.log(dataOrder);
  };

  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };

  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="container-fluid py-5 bg-light">
        <div className="container bg-white">
          <div className="row mt-3">
            <div className="left d-flex flex-column justify-content-md-center col-md-6  col">
              <div className="rotate-seat">
                <SeatPosition
                  width="85%" // MEMBERIKAN BESARAN PADA POLA SEAT
                  height="85%" // MEMBERIKAN TINGGI PADA POLA SEAT
                  fullSeat={fullSeat}
                  activeSeat={activeSeat}
                  handleSelectSeat={handleSelectSeat}
                />
              </div>
            </div>
            <div className="right py-5 col-md-6 ">
              <h4>Tickets</h4>

              {activeSeat.length > 0 ? (
                <div className="ticket-scrolling">
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
      {/* Footer */}

      <Footer />
    </div>
  );
}

export default Order;
