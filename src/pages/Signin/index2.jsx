import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function Signin() {
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
      //   console.log(result);
    } catch (error) {
      alert(error.response.data.msg);
      //   console.error(error.response);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container text-center">
      <h1>Login Page</h1>
      <hr />
      <input type="email" onChange={handleChangeForm} />
      {""}
      <br />
      <input
        type={showPassword ? "text" : "password"}
        onChange={handleChangeForm}
      />
      {""}
      <br />
      <button onClick={handleShowPassword}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
      <br />
      <button className="btn-btn-primary" onClick={handleLogin}>
        SignIn
      </button>
    </div>
  );
}
