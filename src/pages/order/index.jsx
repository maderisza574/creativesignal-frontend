import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Stage from "../../assets/img/stage.png";
import REG from "../../assets/img/REG.png";
import VVIP from "../../assets/img/VVIP.png";
import VIP from "../../assets/img/VIP.png";
import Arr from "../../assets/img/arrupdo.png";

function Order() {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="container-fluid py-5 bg-light">
        <div className="container bg-white">
          <div className="row mt-3">
            <div className="left d-flex flex-column justify-content-md-center col-md-6  col">
              <div className="card1 card border-0">
                <img
                  src={Stage}
                  width="300"
                  height="300"
                  className="card-img"
                />
              </div>
            </div>
            <div className="right py-5 col-md-6">
              <div className="row">
                <div className="col">
                  <div className="tittle col-0 mb-3">Tickets</div>
                </div>
                <div className="tittleby col-8 ">
                  <h6 className="text-danger">
                    BY PRICE &nbsp;
                    <img src={Arr} alt="" />
                  </h6>
                </div>
              </div>
              {/* ticket */}
              <div className="row mt-3">
                <div className="col col-lg-1  mt-2">
                  <img src={REG} alt="" />
                </div>
                <div className="col col-lg-4 ">
                  Section REG,ROW1
                  <br />
                  12 seats available
                  <h6 className="quantity">Quantity</h6>
                </div>
                <div className="col col-lg-4 ">
                  $15 <br />
                  person
                  <div className="d-flex gap-2 justify-content-center w-50 ">
                    <button className="btn btn-primary">&lt;</button>
                    <h6>0</h6>
                    <button className="btn btn-primary">&gt;</button>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col col-lg-1  mt-2">
                  <img src={VVIP} alt="" />
                </div>
                <div className="col col-lg-4 ">
                  Section VIP,ROW1
                  <br />
                  12 seats available
                  <h6 className="quantity">Quantity</h6>
                </div>
                <div className="col col-lg-4 ">
                  $15 <br />
                  person
                  <div className="d-flex gap-2 justify-content-center w-50 ">
                    <button className="btn btn-primary">&lt;</button>
                    <h6>0</h6>
                    <button className="btn btn-primary">&gt;</button>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col col-lg-1  mt-2">
                  <img src={VIP} alt="" />
                </div>
                <div className="col col-lg-4 ">
                  Section VVIP,ROW1
                  <br />
                  12 seats available
                  <h6 className="quantity">Quantity</h6>
                </div>
                <div className="col col-lg-4 ">
                  $15 <br />
                  person
                  <div className="d-flex gap-2 justify-content-center w-50 ">
                    <button className="btn btn-primary">&lt;</button>
                    <h6>0</h6>
                    <button className="btn btn-primary">&gt;</button>
                  </div>
                </div>
              </div>
              {/* end ticket */}
              <div className="total row mt-5">
                <div className="col col-lg-6 ">Ticket section</div>
              </div>
              <div className="total row mt-0">
                <div className="col col-lg-6 ">Quantity</div>
              </div>
              <div className="total row mt-0">
                <div className="col col-lg-6 ">Total Payment</div>
              </div>

              <div className="d-grid gap-2 col-6 mt-4">
                <button className="btn btn-primary">Checkout</button>
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
