import Header from "../Header";
import Johnicon from "../../assets/img/john.png";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
// Implement Redux
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser, updateDataUser } from "../../stores/actions/editprofile";
function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [userid, setUserId] = useState("");
  // const [isUpdate, setIsUpdate] = useState(false);
  console.log(userid);
  console.log(setUserId);
  useEffect(() => {
    dispatch(getDataUser());
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
      console.log(data);
    }
    dispatch(updateDataUser(formData)).then(() => {
      dispatch(getDataUser());
      // resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  // const resetForm = () =>{
  //   setForm({
  //     name: ""
  //     username: ""
  //     gender:""
  //     profession:""
  //     nationality:""
  //     dateofBirth:""
  //     email:""
  //   });
  //   setImage("");
  // };

  const handleChangeForm = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
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
              <h6 className="mb-3 mt-2">Edit Profile</h6>
              <hr />
              {user.message && (
                <div
                  className={
                    "alert alert-dismissible fade show " + user.isError
                      ? "alert-danger"
                      : "alert-primary"
                  }
                  role="alert"
                >
                  {user.message}
                </div>
              )}
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
                      className="form-control"
                      placeholder="Name"
                      onChange={handleChangeForm}
                      aria-label="old Password"
                      value={form.name}
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
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={handleChangeForm}
                      aria-label="old Password"
                      value={form.username}
                    />
                  </div>
                </div>
                <div className="col bg-white">
                  <div className="buttonsign d-grid mt-3">
                    <input className="btn btn-primary" type="file">
                      {image && <img src={image} alt="view image" />}
                      Choose Photo
                    </input>
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
                      placeholder="gender"
                      aria-label="old Password"
                      onChange={handleChangeForm}
                      value={form.email}
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
                      name="Profession"
                      className="form-control"
                      placeholder="Profession"
                      aria-label="old Password"
                      onChange={handleChangeForm}
                      value={form.profession}
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
                      placeholder="nationality"
                      aria-label="old Password"
                      onChange={handleChangeForm}
                      value={form.nationality}
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
                      name="dateofbirth"
                      className="form-control"
                      placeholder="Profession"
                      aria-label="old Password"
                      onChange={handleChangeForm}
                      value={form.dateofBirth}
                    />
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* row3 */}
              <div className="row">
                <div className="col col-md-2 bg-white">
                  <h6>email</h6>
                </div>
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Nationality"
                      aria-label="old Password"
                      onChange={handleChangeForm}
                      value={form.email}
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
                <div className="col col-md-5 bg-white">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="Old Password"
                      name="Old Password"
                      className="form-control"
                      placeholder="Birthday Date"
                      aria-label="old Password"
                      onChange={handleChangeForm}
                    />
                  </div>
                </div>
                <div className="buttonsign d-grid mt-4 mb-5">
                  <button
                    className="btn btn-primary"
                    onClick={handleSave}
                    type="button"
                  >
                    Save
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

export default EditProfile;
