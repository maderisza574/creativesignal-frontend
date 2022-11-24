// import Header from "../Header";
// import Johnicon from "../../assets/img/john.png";
// import ProfileLeft from "../ProfileLeft";
// import Footer from "../Footer";
// import { getDataUser } from "../../stores/actions/user";
// import { useSelector, useDispatch } from "react-redux";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
function Profiledetail() {
  const userid = localStorage.getItem("idUser");
  const [data, setData] = useState([]);
  // console.log(data[0]?.username);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDataUser(userid));
  // }, [userid]);

  const getUserData = async () => {
    try {
      const result = await axios.get(`api/user/${userid}`);
      setData(result.data.data);
      // setDefaultImage(response.data.data[0].image);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    getUserData(userid);
  }, [userid]);

  return (
    <div>
      {/* <Header /> */}
      <div className="card px-0">
        <div className="row">
          {/* <div className="left col col-md-3"> */}
          {/* <ProfileLeft /> */}
          {/* </div> */}
          {/* <div className="right col bg-light py-5"> */}
          <div className="container justify-content-center w-70 rounded bg-white ">
            <h3 className="mb-3 mt-2">Profile</h3>
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
                    className="form-control border-0 "
                    placeholder={data[0]?.name}
                    aria-label="old Password"
                    readOnly
                  />
                </div>
              </div>
              <div className="col bg-white">
                <div className="d-flex justify-content-center">
                  <img
                    src={`https://res.cloudinary.com/maderisza/image/upload/v1668023295/${
                      data[0]?.image.split(".")[0]
                    }`}
                    style={{ width: 50, height: 50 }}
                  />
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
                    className="form-control border-0 "
                    placeholder={data[0]?.username}
                    aria-label="old Password"
                    readOnly
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
                    className="form-control border-0 "
                    placeholder={data[0]?.gender}
                    aria-label="old Password"
                    readOnly
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
                    className="form-control border-0 "
                    placeholder={data[0]?.profession}
                    aria-label="old Password"
                    readOnly
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
                    className="form-control border-0 "
                    placeholder={data[0]?.nationality}
                    aria-label="old Password"
                    readOnly
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
                    className="form-control border-0 "
                    placeholder={data[0]?.dateofBirth}
                    aria-label="old Password"
                    readOnly
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
                    className="form-control border-0 "
                    placeholder={data[0]?.email}
                    aria-label="old Password"
                    readOnly
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
                    className="form-control border-0 plain-text "
                    placeholder="Birthday Date"
                    aria-label="old Password"
                    readOnly
                  />
                </div>
              </div>
            </div>
            {/* row 3 */}
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div className="container-fluid bg-danger"> */}

      {/* </div> */}
      {/* <Footer /> */}
    </div>
    //   </div>
    //   <h1>Profile Page</h1>
    // </div>
  );
}

export default Profiledetail;
