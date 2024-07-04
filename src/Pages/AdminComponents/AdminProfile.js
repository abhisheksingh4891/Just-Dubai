import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faGoogle,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { AppContext } from "../../Context/AppContext";
import Sidebar from "../../Components/Sidebar/Sidebar";

// const baseURL = "http://localhost:1000";
const baseURL = "https://just-dubai-admin-backend.onrender.com";

const AdminProfile = () => {
  const {adminLogin} = useContext(AppContext)
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    designation: "",
    empId: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = Cookies.get("admin");
    if (!token) {
      return;
    }
    try {
      const response = await axios.get(`${baseURL}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      setFormData({
        first: response.data.first,
        last: response.data.last,
        email: response.data.email,
        phone: response.data.phone,
        designation: response.data.designation,
        empId: response.data.empId,
        dateOfBirth: response.data.dateOfBirth,
      });
    } catch (error) {
      console.error("Error fetching profile", error);
      toast.error("Error fetching profile");
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
    setEditPassword(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({
      first: profile?.first || "",
      last: profile?.last || "",
      email: profile?.email || "",
      phone: profile?.phone || "",
      designation: profile?.designation || "",
      dateOfBirth: profile?.dateOfBirth || "",
    });
  };

  const handleCancelPasswordEdit = () => {
    setEditPassword(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("admin");
    if (!token) {
      return;
    }

    toast.dismiss();
    toast.info("Please Wait");
    try {
      const response = await axios.put(
        `${baseURL}/api/profile/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.message === "Profile update successful") {
        toast.dismiss();
        toast.success("Profile update successful");
        fetchProfile();
        setEditMode(false);
      } else if (response.data.message === "Email reset link sent") {
        toast.dismiss();
        toast.success("Email reset link sent");
        fetchProfile();
        setEditMode(false);
      } else {
        toast.dismiss();
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      toast.dismiss();
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error updating profile");
      }
      console.error("Error updating profile", error);
    }
  };

  const handlePasswordEditClick = () => {
    setEditPassword(true);
    setEditMode(false);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("admin");
    if (!token) {
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.dismiss();
    toast.info("Please Wait");
    try {
      const updatedFormData = { ...formData, password: password };

      await axios.put(`${baseURL}/api/profile/update`, updatedFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.dismiss();
      toast.success("Profile update successful");
      setPassword("");
      setConfirmPassword("");
      fetchProfile();
      setEditPassword(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating password");
      console.error("Error updating password", error);
    }
  };

  const getFullImageUrl = (imagePath) => {
    if (imagePath) {
      return `${baseURL}${imagePath}`;
    }
    return "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp";
  };

  return (
    <>
        <div
          className="container-fluid px-0 d-flex flex-column min-vh-100"
          style={{ backgroundColor: "#EBF5FB" }}
        >
          <div
            className="row flex-grow-1 mx-0 h-100"
          >
            {adminLogin && (
              <div
                className="col-12 col-md-2 px-0 position-relative"
                style={{ transition: "all 0.3s" }}
              >
                <Sidebar />
              </div>
            )}
            <div className="col px-0">
              <div className="" style={{ fontFamily: "Raleway" }}>
                {profile ? (
                  <section
                    className="h-100 pt-5"
                    
                  >
                    <h3
                      className="text-center mb-4"
                      style={{ fontFamily: "Raleway" }}
                    >
                      <b>Your Profile</b>
                    </h3>

                    <div className="container-fluid py-3">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 mb-4 mb-lg-0">
                          <div
                            className="card mb-3"
                            style={{ borderRadius: ".5rem" }}
                          >
                            <div className="row g-0">
                              <div
                                className="col-md-4 gradient-custom text-center text-white"
                                style={{
                                  borderTopLeftRadius: ".5rem",
                                  borderBottomLeftRadius: ".5rem",
                                  minHeight: "300px",
                                }}
                              >
                                <img
                                  src={getFullImageUrl(profile.image)}
                                  alt="Avatar"
                                  className="img-fluid my-4"
                                  style={{
                                    width: "200px",
                                    borderRadius: "50%",
                                    height: "200px",
                                  }}
                                />
                                <h5
                                  className="text-dark mb-4"
                                  style={{ fontFamily: "Raleway" }}
                                >
                                  <b>{profile.first + " " + profile.last}</b>
                                </h5>
                                {!editMode && (
                                  <Link>
                                    <FontAwesomeIcon
                                      className="text-dark me-3"
                                      icon={faPenToSquare}
                                      onClick={handleEditClick}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </Link>
                                )}
                              </div>

                              <div className="col-md-8">
                                <div className="card-body p-4">
                                  {!editMode ? (
                                    <>
                                      <h6>Information</h6>
                                      <hr
                                        className="mt-0 mb-3"
                                        style={{
                                          backgroundColor: "rgb(66, 73, 73)",
                                        }}
                                      />

                                      <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                          <h6>First Name</h6>
                                          <p className="text-muted">
                                            {profile.first}
                                          </p>
                                        </div>
                                        <div className="col-6 mb-3">
                                          <h6>Last Name</h6>
                                          <p className="text-muted">
                                            {profile.last}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                          <h6>Phone Number</h6>
                                          <p
                                            className="text-muted"
                                            style={{
                                              fontFamily: "none",
                                              fontSize: "16px",
                                            }}
                                          >
                                            {profile.phone}
                                          </p>
                                        </div>
                                        <div className="col-6 mb-3">
                                          <h6>Date Of Birth</h6>
                                          <p
                                            className="text-muted"
                                            style={{
                                              fontFamily: "none",
                                              fontSize: "16px",
                                            }}
                                          >
                                            {profile.dateOfBirth}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="row pt-1">
                                        <div className="col-12 mb-0">
                                          <h6>Email</h6>
                                          <p className="text-muted">
                                            {profile.email}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="row pt-1 mt-3">
                                        <div className="col-12 mb-3">
                                          {!editPassword && (
                                            <button
                                              className="btn btn-primary btn-sm"
                                              onClick={handlePasswordEditClick}
                                            >
                                              Change password
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <form onSubmit={handleSubmit}>
                                        <h6>Edit Information</h6>
                                        <hr
                                          className="mt-0 mb-4"
                                          style={{
                                            backgroundColor: "rgb(66, 73, 73)",
                                          }}
                                        />

                                        <div className="row pt-1">
                                          <div className="col-6 mb-3">
                                            <h6>First Name</h6>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="first"
                                              value={formData.first}
                                              onChange={handleChange}
                                              required
                                            />
                                          </div>
                                          <div className="col-6 mb-3">
                                            <h6>Last Name</h6>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="last"
                                              value={formData.last}
                                              onChange={handleChange}
                                              required
                                            />
                                          </div>
                                        </div>

                                        <div className="row pt-1">
                                          <div className="col-6 mb-3">
                                            <h6>Phone Number</h6>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="phone"
                                              value={formData.phone}
                                              onChange={handleChange}
                                              style={{
                                                fontFamily: "none",
                                                fontSize: "17px",
                                              }}
                                            />
                                          </div>
                                        </div>

                                        <div className="row pt-1">
                                          <div className="col-6 mb-3">
                                            <h6>Email</h6>
                                            <input
                                              type="email"
                                              className="form-control"
                                              name="email"
                                              value={formData.email}
                                              onChange={handleChange}
                                              required
                                            />
                                          </div>
                                        </div>

                                        <hr className="mt-4 mb-0" />
                                        <div className="d-flex justify-content-start gap-2">
                                          <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                          >
                                            Save changes
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-outline-secondary btn-sm"
                                            onClick={handleCancelEdit}
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </form>
                                    </>
                                  )}
                                </div>
                              </div>

                              {editPassword && (
                                <form
                                  onSubmit={handlePasswordSubmit}
                                  className="pb-4"
                                >
                                  <hr
                                    className="mt-0 mb-4 mx-5"
                                    style={{
                                      backgroundColor: "rgb(66, 73, 73)",
                                    }}
                                  />
                                  <div className="card-body mx-5">
                                    <div className="form-outline mb-4 text-start">
                                      <label
                                        className="form-label"
                                        htmlFor="newPassword"
                                      >
                                        New Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control shadow-none"
                                        id="newPassword"
                                        value={password}
                                        onChange={(e) =>
                                          setPassword(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className="form-outline mb-4 text-start">
                                      <label
                                        className="form-label"
                                        htmlFor="confirmPassword"
                                      >
                                        Confirm Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control shadow-none"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                          setConfirmPassword(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                    <hr className="mt-4 mb-0" />
                                    <div className="d-flex justify-content-start gap-2">
                                      <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                      >
                                        Reset password
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={handleCancelPasswordEdit}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              )}
                            </div>
                            {/* <hr
                    className="mt-0 mb-3 mx-5"
                    style={{ backgroundColor: "rgb(66, 73, 73)" }}
                  />
                  <div className="d-flex justify-content-center align-items-center mt-3 pb-4">
                    <Link>
                      <FontAwesomeIcon
                        className="fs-3 text-dark me-3"
                        icon={faFacebook}
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        className="fs-3 text-dark me-3"
                        icon={faGoogle}
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        className="fs-3 text-dark me-3"
                        icon={faTwitter}
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        className="fs-3 text-dark"
                        icon={faInstagram}
                      />
                    </Link>
                  </div> */}
                          </div>
                        </div>
                        <ToastContainer />
                      </div>
                    </div>
                  </section>
                ) : (
                  <div className="text-center py-5">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h5 className="text-dark mt-3">Loading Profile...</h5>
                  </div>
                )}
              </div>
              {/* <Footer/> */}
            </div>
          </div>
          {/* <ToastContainer /> */}
        </div>
      
    </>
  );
};

export default AdminProfile;
