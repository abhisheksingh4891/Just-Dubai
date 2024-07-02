import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";
import logo from "../../Assets/logo.png";
import "./Sidebar.css";
import { ToastContainer } from "react-toastify";

const Sidebar = () => {
  const { adminLogin, isSidebarVisible, handleLogout, superAdminLogin } =
    useContext(AppContext);

  return (
    <>
      {adminLogin ? (
        <div
          className={`sidebar text-light shadow-lg ${
            isSidebarVisible ? "d-block" : "d-none"
          } d-md-block`}
        >
          <div style={{ fontFamily: "Raleway" }}>
            <div className="d-flex flex-column mt-3">
              <div className="container-fluid">
                <Link className="" to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{ height: "50px", width: "110px" }}
                  />
                </Link>
              </div>
              <h3 className="mb-1 fs-5 text-start px-3 pt-4">Admin Panel</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-light change">
                    <button
                      className="btn w-100 text-light d-flex align-items-center gap-3 p-3 border-0 shadow-none"
                      style={{ height: "50px" }}
                    >
                      <FontAwesomeIcon icon={faHouse} />
                      Dashboard
                    </button>
                  </Link>
                </li>
              </ul>

              <div className="mb-1 px-3 pt-3">
                <h3 className="fs-5 text-start">Pages</h3>
              </div>
              <ul className="nav flex-column px-2">
                <li className="nav-item text-start ms-2">
                  <div className="dropdown">
                    <button
                      className="btn w-100 text-start p-3 text-light border-0 dropdown-toggle shadow-none"
                      type="button"
                      id="dropdownPostUploadButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Post Upload
                    </button>
                    <ul
                      className="dropdown-menu w-100 border-0 shadow-lg"
                      style={{ background: "linear-gradient(150deg, #141e30, #243b55)" }}
                      aria-labelledby="dropdownPostUploadButton"
                    >
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/aboutdubaipage"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          About Dubai
                        </Link>
                      </li>
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/newspage"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          News
                        </Link>
                      </li>
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/adminregister"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/adminregister"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          Entertainment
                        </Link>
                      </li>
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/adminregister"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          Jobs
                        </Link>
                      </li>
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/adminregister"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          Events
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {superAdminLogin ? (
                  <li className="nav-item text-start ms-2">
                    <div className="dropdown">
                      <button
                        className="btn w-100 text-start p-3 text-light border-0 dropdown-toggle shadow-none"
                        type="button"
                        id="dropdownusersButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Users
                      </button>
                      <ul
                        className="dropdown-menu w-100 border-0 shadow-lg"
                        style={{ background: "linear-gradient(150deg, #141e30, #243b55)" }}
                        aria-labelledby="dropdownusersButton"
                      >
                        <li className="nav-item text-start ms-1 px-2 itemhover">
                          <Link
                            to="/adminregister"
                            className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                          >
                            Add User
                          </Link>
                        </li>
                        <li className="nav-item text-start ms-1 px-2 itemhover">
                          <Link
                            to="/removeuser"
                            className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                          >
                            Remove/Edit User
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <></>
                )}

                <li className="nav-item text-start ms-2">
                  <Link to="/contactus" className="nav-link text-light change5">
                    <button className="btn w-100 text-start text-light border-0 p-3 shadow-none">
                      Contact Us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-auto">
            <ul className="nav flex-column">
              <li className="nav-item text-start p-3 d-flex gap-5">
                <button className="btn btn-danger" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </li>
            </ul>
          </div>

          <ToastContainer />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
