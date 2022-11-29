import Header from "../Header";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateDataUser, getDataUser } from "../../stores/actions/user";

function Profileedit() {
  const userid = localStorage.getItem("idUser");
  console.log(userid);
  const dispatch = useDispatch;
  // THIS REDUX
  const data = useSelector((state) => state.user.data[0]);
  console.log(data);

  const updateHandler = async () => {
    try {
      await dispatch(updateDataUser(userid, form));
      await dispatch(getDataUser(userid));
      // alert(result.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  // END REDUX

  const [form, setForm] = useState({
    name: "",
    username: "",
    gender: "",
    profession: "",
    nationality: "",
    dateofBirth: "",
    email: "",
  });
  console.log(form);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
              <h3 className="mb-3 mt-2">Edit Profile</h3>
              {/* row 1 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Name</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChangeForm}
                      className="form-control"
                      placeholder={data?.name}
                      aria-label="old Password"
                    />
                  </div>
                </div>
                <div className="col bg-white">
                  <div className="d-flex justify-content-center  ">
                    <img
                      src={`https://res.cloudinary.com/maderisza/image/upload/v1668023295/${
                        data?.image.split(".")[0]
                      }`}
                      alt=""
                      style={{ width: 50, height: 50 }}
                      className="rounded-circle border border-dark"
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
                      type="text"
                      name="username"
                      className="form-control"
                      onChange={handleChangeForm}
                      placeholder={data?.username}
                      aria-label="old Password"
                    />
                  </div>
                </div>
                <div className="col bg-white">
                  <div className="buttonsign d-grid mt-3">
                    <input type="file" className="btn btn-primary" />
                    <button className="btn btn-primary">Choose Photo</button>
                  </div>
                </div>
              </div>
              {/* end row 2 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Gender</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="text"
                      name="gender"
                      className="form-control"
                      onChange={handleChangeForm}
                      placeholder={data?.gender}
                      aria-label="old Password"
                    />
                  </div>
                </div>
                <div className="col bg-white">
                  <h6 className="mt-2">
                    Image size max 2 mb <br /> image formats: JPG,JPEG,PNG
                  </h6>
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
                      type="text"
                      name="profession"
                      className="form-control"
                      onChange={handleChangeForm}
                      placeholder={data?.profession}
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
                      type="text"
                      name="nationality"
                      className="form-control"
                      onChange={handleChangeForm}
                      placeholder={data?.nationality}
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Date Of Birth</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="text"
                      name="dateofBirth"
                      className="form-control"
                      onChange={handleChangeForm}
                      placeholder={data?.dateofBirth}
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>Email</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      onChange={handleChangeForm}
                      placeholder={data?.email}
                      aria-label="old Password"
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row 4 */}

              <div className="row">
                <div className="col">
                  <div
                    className="btn btn-primary"
                    type="button"
                    onClick={updateHandler}
                  >
                    Submit
                  </div>
                </div>
              </div>
              {/* row 3 */}
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="container-fluid bg-danger"></div>
        <Footer />
      </div>
      {/* //{" "} */}
    </div>
    //   <h1>Profile Page</h1>
    // </div>
  );
}

export default Profileedit;
