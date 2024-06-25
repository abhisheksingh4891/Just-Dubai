import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";
// import logo from "../../Assets/logo.png";
import img1 from "../../Assets/img1.jpg";

import "./Sidebar.css";
import { ToastContainer, toast } from "react-toastify";

const Sidebar = () => {
  const { adminLogin, isSidebarVisible, setAdminLogin } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await localStorage.removeItem("admin");
    toast.error("User Logged Out")
    setTimeout(() => {
        setAdminLogin(false);
        navigate('/');
    }, 1000);
};


  return (
    <div
      className={` text-light shadow-lg ${
        isSidebarVisible ? "d-block" : "d-none"
      } d-md-block`}
      style={{
        height: "100vh",
        width: "300px",
        position: "absolute",
        zIndex: 1000,
        backgroundImage: `url(${img1})`,
        // backgroundColor:"rgb(0,0,128)"
      }}
    >
      <div style={{ fontFamily: "Raleway" }}>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 d-lg-none">
      <div className="container-fluid" style={{ fontFamily: "Raleway" }}>
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", width: "110px" }}
          />
        </Link>
      </div>
      </nav> */}
        <div className="d-flex flex-column">
          <h3 className="mb-1 fs-5 text-danger text-start px-3 pt-3">
            Dashboard
          </h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light change">
                <button
                  className="btn w-100 text-light d-flex align-items-center gap-3 p-3 border-0"
                  style={{ height: "50px" }}
                >
                  <FontAwesomeIcon className="text-danger" icon={faHouse} />
                  Dashboard
                </button>
              </Link>
            </li>
          </ul>

          <div className="mb-1 px-3 pt-3">
            <h3 className="fs-5 text-danger text-start">Pages</h3>
            <h3 className="text-start" style={{ fontSize: "0.75rem" }}>
              Prebuilt Pages
            </h3>
          </div>

          <ul className="nav flex-column px-2">
            {adminLogin ? (
              <>
                {/* <li className="nav-item text-start ms-2">
                  <Link to="/pageanalytics" className="nav-link text-light change p-0">
                    <button className="btn w-100 text-start p-3 text-light border-0" style={{height:'50px'}}>
                      Page Analytics
                    </button>
                  </Link>
                </li> */}
                <li className="nav-item text-start ms-2">
                  <div className="dropdown">
                    <button
                      className="btn w-100 text-start p-3 text-light border-0 dropdown-toggle"
                      type="button"
                      id="dropdownPostUploadButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Post Upload
                    </button>
                    <ul
                      className="dropdown-menu w-100 border-0 shadow-lg" style={{  backgroundColor:"rgb(51, 65, 127)"}}
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
                <li className="nav-item text-start ms-2">
                  <div className="dropdown">
                    <button
                      className="btn w-100 text-start p-3 text-light border-0 dropdown-toggle"
                      type="button"
                      id="dropdownusersButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Users
                    </button>
                    <ul
                      className="dropdown-menu w-100 border-0 shadow-lg" style={{  backgroundColor:"rgb(51, 65, 127)"}}
                      aria-labelledby="dropdownusersButton"
                    >
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/adminregister"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                          target="_blank"
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
                <li className="nav-item text-start p-3">       
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  
                </li>
              </>
            ) : (
              <li className="nav-item text-start ms-2">
                  <div className="dropdown">
                    <button
                      className="btn w-100 text-start p-3 text-light border-0 dropdown-toggle"
                      type="button"
                      id="dropdownauthButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Authentication
                    </button>
                    <ul
                      className="dropdown-menu w-100 border-0 shadow-lg" style={{  backgroundColor:"rgb(51, 65, 127)"}}
                      aria-labelledby="dropdownauthButton"
                    >
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/adminlogin"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="nav-item text-start ms-1 px-2 itemhover">
                        <Link
                          to="/contactus"
                          className="dropdown-item text-light d-flex align-items-center gap-2 px-3 py-2"
                        >
                          Contact Us
                        </Link>
                      </li>                    
                    </ul>
                  </div>
                </li>
            )}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
