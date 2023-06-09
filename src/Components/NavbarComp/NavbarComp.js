import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <img
          src="./assets/image/CarBrand.png"
          id="brandLogo"
          alt=""
          href="#"
        ></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <a className="navbar-toggler-icon"></a>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
