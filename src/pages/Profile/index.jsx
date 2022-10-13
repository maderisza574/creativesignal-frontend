import Header from "../../components/Header";
// import Johnicon from "../../assets/img/john.png";
import ProfileLeft from "../../components/ProfileLeft";
import Footer from "../../components/Footer";
import ProfileDetail from "../../components/ProfileDetail";
function Profile() {
  return (
    <div>
      <Header />
      <div className="card py-3 bg-light">
        <div className="row bg-light">
          <div className="left bg-light col col-md-3 mt-5">
            <ProfileLeft />
          </div>
          <div className="right col bg-light py-5">
            <div className="container justify-content-center w-70 rounded bg-white ">
              <ProfileDetail />
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

export default Profile;
