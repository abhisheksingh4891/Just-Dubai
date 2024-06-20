import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const baseURL = "http://localhost:1000";

const Register = () => {
  const navigate = useNavigate();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("first", first);
      formData.append("last", last);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("designation", designation);

      await axios.post(`${baseURL}/api/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Registration Successful");
      setTimeout(() => {
        navigate("/adminlogin");
      }, 1000);
    } catch (error) {
      toast.error("Registration failed");
      console.error("Registration Error:", error);
    }
  };

  return (
    <section className="pt-4 mt-2" style={{ backgroundColor: "#f4f5f7", fontFamily: "Raleway", minHeight: "100vh" }}>
      <h3 className="text-center"><b>Register</b></h3>
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
              <div className="card-body py-5 px-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline text-start">
                        <label className="form-label" htmlFor="firstName">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={first}
                          onChange={(e) => setFirst(e.target.value)}
                          className="form-control shadow-none"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline text-start">
                        <label className="form-label" htmlFor="lastName">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={last}
                          onChange={(e) => setLast(e.target.value)}
                          className="form-control shadow-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4 text-start">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control shadow-none"
                    />
                  </div>

                  <div className="form-outline mb-4 text-start">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control shadow-none"
                    />
                  </div>

                  <div className="form-outline mb-4 text-start">
                    <label className="form-label" htmlFor="designation">
                      Designation
                    </label>
                    <input
                      type="text"
                      id="designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="form-control shadow-none"
                    />
                  </div>

                  <div className="form-outline mb-4 text-start">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control shadow-none"
                    />
                  </div>

                  {/* File Upload Input */}
                  <div className="form-outline mb-4 text-start">
                    <label className="form-label" htmlFor="image">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleImageChange}
                      className="form-control shadow-none"
                    />
                  </div>

                  <div className="mb-4 text-start">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign up
                    </button>
                  </div>

                  <div className="pb-4 text-start">
                    Already have an account? <Link to="/adminlogin">Login Here</Link>
                  </div>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon className="fs-2 text-dark" icon={faFacebook} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon className="fs-2 text-dark" icon={faGoogle} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon className="fs-2 text-dark" icon={faTwitter} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon className="fs-2 text-dark" icon={faGithub} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
