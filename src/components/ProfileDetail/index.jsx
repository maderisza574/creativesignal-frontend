import Header from "../Header";
import Johnicon from "../../assets/img/john.png";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
function Profiledetail() {
  return (
    <div>
      <Header />
      <div className="card px-0">
        <div className="row">
          <div className="left col col-md-3">
            <ProfileLeft />
          </div>
          <div className="right col bg-light py-5">
            <div className="container justify-content-center w-70 rounded bg-white ">
              <h6 className="mb-3 mt-2">Profile</h6>
              {/* row 1 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Name</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Name"
                      aria-label="old Password"
                    />
                  </div>
                </div>
                <div className="col bg-white">
                  <div className="d-flex justify-content-center">
                    <img src={Johnicon} alt="" />
                  </div>
                </div>
              </div>
              {/* end row 1 */}
              {/* row 2 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Username</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Username"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 2 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Email</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Email"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Phone Number</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Phone Number"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Gender</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Gender"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Profession</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Profession"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Nationality</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Nationality"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row 4 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Birthday Date</h6>
                </div>
                <div className="col col-md-5 bg-white mb-3">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Birthday Date"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* row 3 */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bg-danger"> */}

      {/* </div> */}
      <Footer />
    </div>
    //   </div>
    //   <h1>Profile Page</h1>
    // </div>
  );
}

export default Profiledetail;
