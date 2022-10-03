import mascot from "../../assets/img/mascotimage.png";
import "./index.css";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import React, { useState } from "react";
import axios from "axios";
import { Form, Navigate } from "react-router-dom";
function Signin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("idUser", result.data.data.token);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.msg);
      Navigate("/");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleChangeForm = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
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
            <div className="form-group px-5 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
            <div className="form-group px-5 mb-3">
              <input
                type="email"
                onChange={handleChangeForm}
                className="form-control"
                placeholder="Email"
                aria-label="Email"
              />
              {""}
            </div>
            <div className="form-group px-5 mb-3">
              <input
                type={showPassword ? "text" : "password"}
                onChange={handleChangeForm}
                className="form-control"
                placeholder="Password"
                aria-label="Password"
              />
              {""}
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
              <button onClick={handleShowPassword}>
                {showPassword ? "Hide" : "Show"} Password
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
      <footer className="footer container-fluid text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <img src={logo} className="img-fluid" alt="logo"></img>
            <p>Find events you love with our</p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Wetick</h6>
            <p>
              <a href="#!" className="text-reset">
                About Us
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Features
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Blog
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Payments
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Mobile App
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Features</h6>
            <p>
              <a href="#!" className="text-reset">
                Booking
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Create Event
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Discover
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Register
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Company</h6>
            <p>
              <a href="#!" className="text-reset">
                Partnership
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Terms of Service
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Sitemap
              </a>
            </p>
          </div>
          <div className="text-left p-4">© 2022 Copyright:</div>
        </div>
      </footer>
    </>
  );
}

export default Signin;
