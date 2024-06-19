import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {

  const {adminLogin, toggleSidebar} = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-1">
      <div className="container-fluid" style={{ fontFamily: "Raleway" }}>
        <Link className="navbar-brand fs-3" to="/">
          <b>Just-Dubai</b>
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse justify-content-end align-items-center">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <div className="d-flex align-items-center position-relative mt-2">
                <input className="form-control" type="text" placeholder="Search" style={{width:"300px"}} />
                <div
                  className="text-dark position-absolute"
                  style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor:"pointer" }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-3" to="./">
                <FontAwesomeIcon icon={faBell} />
              </Link>
            </li>
            {
              adminLogin ? (
                <li className="nav-item d-block">
                  <Link className="nav-link text-dark fs-3" to="./">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              ):(
                <li className="nav-item d-none">
                  <Link className="nav-link text-dark fs-3" to="./">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
