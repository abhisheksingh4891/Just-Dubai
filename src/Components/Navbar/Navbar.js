import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";
import logo from "../../Assets/logo.png";
import './Navbar.css';
import { ToastContainer, toast } from "react-toastify";
import img1 from "../../Assets/img1.jpg";

const Navbar = () => {
  const { adminLogin, toggleSidebar, setAdminLogin } = useContext(AppContext);

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
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-1" style={{ backgroundImage: `url(${img1})`}}>
      <div className="container-fluid" style={{ fontFamily: "Raleway" }}>
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", width: "110px" }}
          />
        </Link>

        <button
        className="navbar-toggler text-light"
        type="button"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon className="fs-1" icon={faBars} />
      </button>

            {/* <li className="nav-item">
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
            </li> */}
            {adminLogin ? (
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            <li className="nav-item mt-2 ">
              <Link className="nav-link text-light fs-3 no-hover" to="./">
                <FontAwesomeIcon icon={faBell} />
              </Link>
            </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle text-light fs-4 no-hover" // Apply no-hover class to remove hover effect
                  id="dropdownProfileButton"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <ul
                  className="dropdown-menu dropdown-menu-end mt-2"
                  aria-labelledby="dropdownProfileButton"
                  style={{  backgroundColor:"rgb(222, 223, 223)"}}
                >
                  <li className="change px-2">
                    <Link
                      to="/adminprofile"
                      className="dropdown-item text-dark fw-bold rounded"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className="change px-2">
                    <div
                      className="dropdown-item text-dark fw-bold rounded"
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </li>
              </ul>
            </div>
            ) : (
              <li className="nav-item d-none">
                <Link className="nav-link text-light fs-3" to="./">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            )}
      </div>
    </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
