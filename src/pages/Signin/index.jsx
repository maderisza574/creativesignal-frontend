import mascot from "../../assets/img/mascotimage.png";
import "./index.css";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
// import { ArrowRight } from "react-bootstrap-icons";
function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("api/auth/login", form);
      localStorage.setItem("idUser", result.data.data.userid);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="container-fluid py-0 text center">
        <div className="row">
          <div className="left d-md-flex d-none flex-column align-items-center justify-content-center col-md-8 col bg-primary">
            <img src={mascot} className="img-fluid" alt="logo"></img>
          </div>
          <div className="right col-md-4">
            <img src={logo} className=" px-5 img-fluid" alt="logo"></img>
            <p className="sign px-5 mt-3"> Sign in</p>
            <p className="hi px-5 mt-3">Hi, Welcome back to Urticket</p>
            {/* form */}
            <div className="container text-center mt-5 w-75">
              <input
                type="email"
                name="email"
                onChange={handleChangeForm}
                className="form-control"
                placeholder="Email"
                aria-label="Email"
              />
              {""}
              <br />

              <div className="input-group ">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id=""
                  className="form-control"
                  placeholder="Your Password"
                  onChange={handleChangeForm}
                />
                <button
                  className="btn btn-sm btn-light border border-1"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <h6 className="forgot">
              <a href="./login.html">Forgot Password?</a>
            </h6>
            <div className="buttonsign d-grid gap-5 col-7 mt-4">
              <button
                className="btn btn-primary"
                onClick={handleLogin}
                type="button"
              >
                Sign In
              </button>
            </div>
            <h6 className="or mt-2">Or sign in with</h6>
            {/* end form */}
            {/* button */}
            <div className="container">
              <div className="row">
                <div className="goog col">
                  <div className="buttongoogle d-grid gap-0 col-2 mt-3">
                    <button className="btn btn-outline-primary" type="button">
                      <img
                        src={google}
                        alt="icongoo"
                        width="30px"
                        height="30px"
                      ></img>
                    </button>
                  </div>
                </div>
                <div className="face col">
                  <div className="buttongoogle d-grid gap-0 col-2 mt-3">
                    <button className="btn btn-outline-primary" type="button">
                      <img
                        src={facebook}
                        alt="icongoo"
                        width="30px"
                        height="30px"
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* endbutton */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
