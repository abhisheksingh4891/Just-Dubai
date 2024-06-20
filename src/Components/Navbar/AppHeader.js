import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse, faBars, faBell, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";
import logo from "../../Assets/logo.png";
import './Navbar.css';
import '../Sidebar/Sidebar.css';

const AppHeader = () => {
    const { adminLogin, toggleSidebar, handleLogout, isSidebarVisible } = useContext(AppContext);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-1">
                <div className="container-fluid" style={{ fontFamily: "Raleway" }}>
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={{ height: "50px", width: "110px" }} />
                    </Link>

                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
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
                                <Link className="nav-link text-light fs-3 no-hover" to="./">
                                    <FontAwesomeIcon icon={faBell} />
                                </Link>
                            </li>
                            {adminLogin ? (
                                <li className="nav-item dropdown">
                                    <div
                                        className="nav-link dropdown-toggle text-light fs-4 no-hover"
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
                                    >
                                        <li>
                                            <Link
                                                to="/adminprofile"
                                                className="dropdown-item text-dark no-hover"
                                            >
                                                My Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <div
                                                className="dropdown-item text-dark no-hover"
                                                onClick={handleLogout}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Logout
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item d-none">
                                    <Link className="nav-link text-light fs-3" to="./">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`bg-light text-dark px-0 ${isSidebarVisible ? "d-block" : "d-none"} d-md-block`} style={{ width: "300px", position: "fixed", marginTop:'68px' }}>
                <div style={{ fontFamily: "Raleway" }}>
                    <div className="d-flex flex-column">
                        <h3 className="mb-1 fs-6 text-primary text-start px-3 pt-3">Dashboard</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-dark change">
                                    <button className="btn w-100 text-dark d-flex align-items-center gap-3 p-3 border-0" style={{ height: "50px" }}>
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
                                            Page Views
                                        </Link>
                                    </li>
                                    <li className="nav-item text-start ms-2 itemhover">
                                        <Link to="/" className="nav-link text-dark">
                                            Subscribers
                                        </Link>
                                    </li>
                                    <li className="nav-item text-start ms-2 itemhover">
                                        <Link to="/" className="nav-link text-dark">
                                            Posts
                                        </Link>
                                    </li>
                                    <li className="nav-item text-start ms-2 itemhover">
                                        <Link to="/postupload" className="nav-link text-dark">
                                            Post Upload
                                        </Link>
                                    </li>
                                    <li className="nav-item text-start ">
                                        <div className="p-1 mt-2">
                                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
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
                                        <ul className="dropdown-menu w-50 border-0" aria-labelledby="dropdownMenuButton">
                                            <li className="nav-item text-start ms-4 itemhover">
                                                <Link to="/adminlogin" className="dropdown-item text-dark d-flex align-items-center gap-2 p-2">
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                    Login
                                                </Link>
                                            </li>
                                            <li className="nav-item text-start ms-4 itemhover">
                                                <Link to="/adminregister" className="dropdown-item text-dark d-flex align-items-center gap-2 p-2">
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
        </>
    );
};

export default AppHeader;
