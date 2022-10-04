import mascot from "../../assets/img/mascotimage.png";
import "./index.css";
import logo from "../../assets/img/logo.png";
import React, { useState } from "react";
import axios from "axios";
import { Form, Navigate } from "react-router-dom";
import Signin from "../../pages/Signin/index";
function Signup() {
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
            <p className="sign px-5 mt-3"> Sign up</p>
            <p className="hi px-5 mt-3">
              already have an account?
              <a href={Signin}>Log In</a>
            </p>
            {/* form */}
            <div className="form-group px-5 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                aria-label="Full name"
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
            <div className="form-group px-5 mb-3">
              <input
                type={showPassword ? "text" : "password"}
                onChange={handleChangeForm}
                className="form-control"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
              {""}
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Accept terms and coditions
              </label>
            </div>
            <div className="buttonsign d-grid gap-5 col-7 mt-4">
              <button
                className="btn btn-primary"
                onClick={handleLogin}
                type="button"
              >
                Sign Up
              </button>
              <button onClick={handleShowPassword}>
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
            {/* end form */}
            {/* button */}
            {/* <div className="container">
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
            </div> */}
            {/* endbutton */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
