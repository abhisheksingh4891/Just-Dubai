import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";
import logo from "../../Assets/logo.png";
import "./Sidebar.css";

const Sidebar = ({ isVisible }) => {
  const { adminLogin, handleLogout, isSidebarVisible } = useContext(AppContext);

  return (
    <div
      className={`bg-light text-dark ${
        isSidebarVisible ? "d-block" : "d-none"
      } d-md-block`}
      style={{
        height: "100vh",
        width: "300px",
        position: "absolute",
        zIndex: 1000,
      }}
    >
      <div style={{ fontFamily: "Raleway" }}>
        <div className="d-flex flex-column">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 d-lg-none">
            <div className="container-fluid" style={{ fontFamily: "Raleway" }}>
              <Link className="navbar-brand" to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "50px", width: "110px" }}
                />
              </Link>
            </div>
          </nav>
          <h3 className="mb-1 fs-6 text-primary text-start px-3 pt-3">
            Dashboard
          </h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark change">
                <button
                  className="btn w-100 text-dark d-flex align-items-center gap-3 p-3 border-0"
                  style={{ height: "50px" }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                  Dashboard
                </button>
              </Link>
            </li>
          </ul>

          <div className="mb-1 px-3 pt-3">
            <h3 className="fs-6 text-primary text-start">Pages</h3>
            <h3 className="text-start" style={{ fontSize: "0.75rem" }}>
              Prebuild Pages
            </h3>
          </div>

          <ul className="nav flex-column px-2">
            {adminLogin ? (
              <>
                <li className="nav-item text-start ms-2 itemhover">
                  <Link to="/pageviews" className="nav-link text-dark">
                    Page Analytics
                  </Link>
                </li>
                <li className="nav-item text-start ms-2 itemhover">
                  <Link to="/postupload" className="nav-link text-dark">
                    Post Upload
                  </Link>
                </li>
                <li className="nav-item text-start ">
                  <div className="p-1 mt-2">
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              </>
            ) : (
              <li className="nav-item text-start ms-2">
                <div className="dropdown">
                  <button
                    className="btn w-100 text-start p-3 text-dark border-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Authentication
                  </button>
                  <ul
                    className="dropdown-menu w-50 border-0"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="nav-item text-start ms-4 itemhover">
                      <Link
                        to="/adminlogin"
                        className="dropdown-item text-dark d-flex align-items-center gap-2 p-2"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                        Login
                      </Link>
                    </li>
                    <li className="nav-item text-start ms-4 itemhover">
                      <Link
                        to="/adminregister"
                        className="dropdown-item text-dark d-flex align-items-center gap-2 p-2"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
