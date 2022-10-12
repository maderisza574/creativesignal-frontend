import Header from "../../components/Header";
// import Johnicon from "../../assets/img/john.png";
import ProfileLeft from "../../components/ProfileLeft";
function Profile() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="left col col-md-4">
          <ProfileLeft />
        </div>
        <div className="right col col-md-8 bg-warning py-5">
          <h6>Change Password</h6>
          <div className="container bg-light ">
            {/* row 1 */}
            <div className="row">
              <div className="col col-md-2 bg-primary">
                <h6>Old Password</h6>
              </div>
              <div className="col bg-danger">
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
              <div className="col col-md-2 bg-primary">
                <h6>New Password</h6>
              </div>
              <div className="col bg-danger">
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
              <div className="col col-md-2 bg-primary">
                <h6>Confirm Password</h6>
              </div>
              <div className="col bg-danger">
                <div className="input-group mb-3 w-75">
                  <input
                    type="Old Password"
                    name="Old Password"
                    className="form-control"
                    placeholder="Confirm Password"
                    aria-label="old Password"
                  />
                </div>
                <div className="buttonsign d-grid mt-4">
                  <button className="btn btn-primary" type="button">
                    Update
                  </button>
                </div>
              </div>
            </div>
            {/* row 3 */}
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bg-danger"> */}

      {/* </div> */}
    </div>
    //   </div>
    //   <h1>Profile Page</h1>
    // </div>
  );
}

export default Profile;
