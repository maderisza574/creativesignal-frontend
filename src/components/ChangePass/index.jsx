import Header from "../../components/Header";
// import Johnicon from "../../assets/img/john.png";
import ProfileLeft from "../../components/ProfileLeft";
import Footer from "../../components/Footer";
function ChangePass() {
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
              <h6 className="mb-3 mt-2">Change Password</h6>
              {/* row 1 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Old Password</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Old Password"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 1 */}
              {/* row 2 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>New Password</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="New Password"
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 2 */}
              {/* row 3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Confirm Password</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-label="old Password"
                    />
                  </div>
                </div>
                <div className="buttonsign d-grid mt-4 mb-5">
                  <button className="btn btn-primary" type="button">
                    Update
                  </button>
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

export default ChangePass;
