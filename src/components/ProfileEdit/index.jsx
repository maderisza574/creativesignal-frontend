import Header from "../Header";
import ProfileLeft from "../ProfileLeft";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  updateDataUser,
  getDataUser,
  updateImageUser,
} from "../../stores/actions/user";

function Profileedit() {
  const userid = localStorage.getItem("idUser");
  const [newImage, setNewImage] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const lengthImage = Object.keys(newImage).length;
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
  // const handleInputImage = (e) => {
  //   const { name, files } = e.target;
  // };
  // END REDUX
  // THIS FOR IMAGE
  const handleInputImage = (e) => {
    const { name, files } = e.target;
    setNewImage({ [name]: files[0] });
    setImagePreview(URL.createObjectURL(files[0]));
  };
  // const handleUpdateImage = async () => {
  //   try {
  //     const imageData = new FormData();
  //     imageData.append("image", newImage.image);
  //     await dispatch(updateImageUser(userid, imageData));
  //     await dispatch(getDataUser(userid));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleUpdateImage = () => {
    const imageData = new FormData();
    imageData.append("image", newImage.image);
    dispatch(updateImageUser(userid, imageData)).then(() => {
      dispatch(getDataUser(userid));
    });
  };

  // END FOR IMAGE

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
                  {/* <div className="d-flex justify-content-center  ">
                    <img
                      src={`https://res.cloudinary.com/maderisza/image/upload/v1668023295/${
                        data?.image.split(".")[0]
                      }`}
                      alt=""
                      style={{ width: 50, height: 50 }}
                      className="rounded-circle border border-dark"
                    />
                  </div> */}
                  {/* this new preview image */}
                  <div className="d-flex justify-content-center">
                    <img
                      src={
                        lengthImage > 0
                          ? imagePreview
                          : data?.image.split(".")[0]
                          ? `https://res.cloudinary.com/maderisza/image/upload/v1668023295/${
                              data?.image.split(".")[0]
                            }`
                          : "https://res.cloudinary.com/dra4ha50q/image/upload/v1665756702/Wainscot-Event-Organizing/User/default-profile_tw4rl0.png"
                      }
                      alt=""
                      style={{ width: 50, height: 50 }}
                      className="rounded-circle border border-dark"
                    />
                  </div>
                  {/* end new previe image */}
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
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="btn btn-primary"
                      onChange={handleInputImage}
                    />
                    {lengthImage > 0 ? (
                      <div className="text-center mb-5">
                        <button className="button" onClick={handleUpdateImage}>
                          Save
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
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
