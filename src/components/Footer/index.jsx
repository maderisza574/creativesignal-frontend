import React from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <>
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
