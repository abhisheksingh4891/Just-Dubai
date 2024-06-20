import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";
import logo from "../../Assets/logo.png";
import './Navbar.css'

const Navbar = () => {
  const { adminLogin, toggleSidebar } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-1">
      <div className="container-fluid" style={{ fontFamily: "Raleway" }}>
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", width: "110px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon className="fs-1" icon={faBars} />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            <li className="nav-item">
              <div className="d-flex align-items-center position-relative mt-1">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  style={{ width: "300px" }}
                />
                <div
                  className="text-dark position-absolute"
                  style={{
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </li>
            <li className="nav-item mt-2">
              <Link className="nav-link text-dark fs-3" to="./">
                <FontAwesomeIcon icon={faBell} />
              </Link>
            </li>
            {adminLogin ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark fs-4 hover-none"
                  to="#"
                  id="dropdownProfileButton"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownProfileButton"
                >
                  <li>
                    <Link
                      to="/adminlogin"
                      className="dropdown-item text-dark"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/adminregister"
                      className="dropdown-item text-dark"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item d-none">
                <Link className="nav-link text-dark fs-3" to="./">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
