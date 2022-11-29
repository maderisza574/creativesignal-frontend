import logo from "../../assets/img/logo.png";
// import avatar from "../../assets/img/john.png";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
// import { clear } from "@testing-library/user-event/dist/clear";

export default function Header() {
  const userid = localStorage.getItem("idUser");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const name = "";
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/auth/logout");
      localStorage.clear();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
    // localStorage.removeItem("token");
  };
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  const handleProfile = () => {
    navigate("/profile");
  };
  const handleHome = () => {
    navigate("/");
  };
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
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={handleHome}>
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">HM</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home Anchor
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/detail" className="nav-link">
                  Create Event
                </Link>
                {/* <a className="nav-link" href="/detail">
                  Create Event
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Location
                </Link>
                {/* <a className="nav-link" href="#">
                  Location
                </a> */}
              </li>
            </ul>
            <div className="d-flex gap-3">
              {isLogin ? (
                <>
                  <div style={{ cursor: "pointer" }}>
                    <img
                      src={`https://res.cloudinary.com/maderisza/image/upload/v1668023295/${
                        data[0]?.image.split(".")[0]
                      }`}
                      style={{ width: 50, height: 50 }}
                    />
                  </div>
                  <p className="my-auto">{name ? name : "Anonymous"}</p>
                  {/* <p className="my-auto">{name || "Anonymous"}</p> */}
                  <div className="dropdown">
                    <button
                      className="btn btn-white dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" onClick={handleProfile}>
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-danger dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleNavigate("signin")}
                  >
                    Signin
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleNavigate("signup")}
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
