import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:1000";

const AdminProfile = () => {
  const [profile, setProfile] = useState(null); 
  const [editMode, setEditMode] = useState(false); 
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    designation: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem("admin");
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
      console.log(response.data);
      setFormData({
        first: response.data.first,
        last: response.data.last,
        email: response.data.email,
        phone: response.data.phone,
        designation: response.data.designation,
      });
    } catch (error) {
      console.error("Error fetching profile", error);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({
      first: profile.first,
      last: profile.last,
      email: profile.email,
      phone: profile.phone,
      designation: profile.designation,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("admin");
    if (!token) {
      return;
    }
    try {
      await axios.put(
        `${baseURL}/api/profile/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchProfile(); 
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile", error);
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
      {profile ? (
        <section className="vh-100 pt-5" style={{ backgroundColor: "#f4f5f7", fontFamily: "Raleway" }}>
        <h3 className="text-center"><b>Your Profile</b></h3>
          <div className="container-fluid py-3">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4 gradient-custom text-center text-white"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                        minHeight: "300px"
                      }}
                    >
                      <img
                        src={getFullImageUrl(profile.image)}
                        alt="Avatar"
                        className="img-fluid my-4"
                        style={{ width: "200px", borderRadius: "50%" }}
                      />
                      <h5 className="text-dark">{profile.first + " " + profile.last}</h5>
                      <p className="text-dark">{profile.designation}</p>
                      {!editMode && (
                        <Link><FontAwesomeIcon
                          className="mb-5 text-dark"
                          icon={faPenToSquare}
                          onClick={handleEditClick}
                          style={{ cursor: "pointer" }}
                        /></Link>
                      )}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        {!editMode ? (
                          <>
                            <h6>Information</h6>
                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                              <div className="col-6 mb-3">
                                <h6>First Name</h6>
                                <p className="text-muted">{profile.first}</p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6>Last Name</h6>
                                <p className="text-muted">{profile.last}</p>
                              </div>
                            </div>
                            <div className="row pt-1">
                              <div className="col-6 mb-3">
                                <h6>Email</h6>
                                <p className="text-muted">{profile.email}</p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6>Phone</h6>
                                <p className="text-muted">{profile.phone}</p>
                              </div>
                            </div>
                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                              <div className="col-12 mb-0">
                                <h6>Designation</h6>
                                <p className="text-muted">{profile.designation}</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-start fs-5">
                              <Link><FontAwesomeIcon className="fs-4 text-dark me-3" icon={faFacebook} /></Link>
                              <Link><FontAwesomeIcon className="fs-4 text-dark me-3" icon={faGoogle} /></Link>
                              <Link><FontAwesomeIcon className="fs-4 text-dark me-3" icon={faTwitter} /></Link>
                              <Link><FontAwesomeIcon className="fs-4 text-dark" icon={faInstagram} /></Link>
                            </div>
                          </>
                        ) : (
                          <form onSubmit={handleSubmit}>
                            <h6>Edit Information</h6>
                            <hr className="mt-0 mb-4" />
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
                              <div className="col-6 mb-3">
                                <h6>Phone</h6>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="row pt-1">
                              <div className="col-12 mb-3">
                                <h6>Designation</h6>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="designation"
                                  value={formData.designation}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <hr className="mt-4 mb-4" />
                            <div className="d-flex justify-content-start gap-2">
                              <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                              >
                                Save Changes
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    </>
  );
};

export default AdminProfile;
