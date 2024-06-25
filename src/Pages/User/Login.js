import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// const baseURL = "http://localhost:1000";
const baseURL = "https://just-dubai-admin-backend.onrender.com";

const Login = () => {
  const { adminLogin, setAdminLogin } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (adminLogin) {
      navigate("/");
    }
  }, [adminLogin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.info("Checking User Data")
      const response = await axios.post(`${baseURL}/api/login`, {
        email,
        password,
      });
      toast.success("Login Successful");
      localStorage.setItem("admin", response.data.token);
      setTimeout(() => {
        setAdminLogin(true);
      }, 1000);
    } catch (error) {
      toast.error("Login Failed");
      console.log(
        "Error logging in:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <section className="py-0">
        <div
          className="px-2 px-md-5 text-center text-lg-start"
          style={{
            backgroundColor: "#f4f5f7",
            fontFamily: "Raleway",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight text-start text-lg-start">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <p
                  className="text-start text-lg-start"
                  style={{ color: "hsl(217, 10%, 50.8%)" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit} className="px-1">
                      <div className="form-outline mb-4 text-start">
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form3Example3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control shadow-none"
                          required
                        />
                      </div>

                      <div className="form-outline mb-4 text-start">
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control shadow-none"
                          required
                        />
                      </div>

                      <div className="text-start">
                        <button
                          type="submit"
                          className="btn btn-primary mb-4"
                        >
                          Log in
                        </button>
                      </div>
                      {/* <div className="pb-4 text-start">
                        Already have an account?{" "}
                        <Link to="/adminregister">Register Here</Link>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
