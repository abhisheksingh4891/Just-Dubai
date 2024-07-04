import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const baseURL = "http://localhost:1000";
const baseURL = "https://just-dubai-admin-backend.onrender.com";

const Login = () => {
  const { setAdminLogin, setSuperAdminLogin } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  const generateRandomCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setGeneratedCaptcha(result);
  };

  const handleRefresh = () => {
    generateRandomCaptcha();
  }

  useEffect(() => {
    generateRandomCaptcha();
    const interval = setInterval(() => {
      generateRandomCaptcha();
    }, 180000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      captchaValue !== generatedCaptcha &&
      email.length > 2 &&
      password.length > 2
    ) {
      toast.dismiss();
      toast.error("Incorrect CAPTCHA.Please complete verification.");
      return;
    }

    if (email.length >= 6 && password.length >= 6) {
      toast.info("Please Wait");
    }

    try {
      // toast.info("Please wait");
      const response = await axios.post(`${baseURL}/api/login`, {
        email,
        password,
      });
      toast.dismiss();
      toast.success(response.data.message);

      Cookies.set("admin", response.data.token, { expires: 1 });
      Cookies.set("superadmin", response.data.superAdmin, { expires: 1 });

      setTimeout(() => {
        setSuperAdminLogin(response.data.superAdmin);
        setAdminLogin(true);
      }, 1000);
    } catch (error) {
      toast.dismiss();
      toast.error(
        error.response
          ? error.response.data.message
          : "Something went wrong. Please try again."
      );
      console.log("Error logging in:", error.response || error.message);
    }
  };

  const handleForget = async (e) => {
    e.preventDefault();
    toast.dismiss();
    toast.info("Sending recovery email");
    try {
      await axios.post(`${baseURL}/api/users/forgotpassword`, {
        email,
      });
      toast.dismiss();
      toast.success("Recovery email sent successfully");
      setForgot(!forgot);
    } catch (error) {
      toast.dismiss();
      toast.error("Error sending recovery email");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setForgot(!forgot);
  };

  return (
    <div>
      <section className="py-0">
        <div
          className="d-flex justify-content-center align-items-center text-center text-lg-start"
          style={{
            backgroundColor: "#EBF5FB",
            fontFamily: "Raleway",
            minHeight: "100vh",
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-8 col-sm-10 mb-5">
                <div className="card">
                  <div className="card-body py-4 px-md-5 shadow-lg">
                    {forgot ? (
                      <>
                        <form onSubmit={handleForget}>
                          <h4 className="text-start fs-5">Forgot Password</h4>
                          <div className="form-outline mb-4 text-start pt-2">
                            <input
                              type="email"
                              id="form3Example30"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control shadow-none"
                              placeholder="Enter your email here"
                            />
                          </div>
                          <p className="text-start">
                            Enter your email to receive a reset password link.
                          </p>

                          <div className="text-start">
                            <button
                              type="submit"
                              className="btn btn-primary btn-sm mb-4"
                            >
                              Reset Password
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm mb-4 ms-2"
                              onClick={handleForgotPassword}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <>
                        <form onSubmit={handleSubmit}>
                          <div className="form-outline mb-4 text-start">
                            <label
                              className="form-label"
                              htmlFor="form3Example3"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="form3Example3"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control shadow-none"
                            />
                          </div>

                          <div className="form-outline mb-4 text-start">
                            <label
                              className="form-label"
                              htmlFor="form3Example4"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control shadow-none"
                            />
                          </div>

                          <div className="form-outline mb-4 text-start">
                            <div>
                              <label
                                htmlFor="captcha"
                                style={{
                                  border: "2px solid black",
                                  padding: "2px", 
                                  fontSize: "16px",
                                  fontFamily: "Arial, sans-serif", 
                                  display: "inline-block",
                                  width: "120px", 
                                  textAlign: "center", 
                                  letterSpacing: "4px", 
                                }}
                              >
                                {generatedCaptcha}
                              </label>
                              <Link className="ms-2" onClick={handleRefresh}><FontAwesomeIcon icon={faArrowsRotate} /></Link>
                            </div>
                            <div>
                              <label style={{fontSize:"14px"}}>Please Verify You Are a Human</label>
                            </div>

                            <div className="d-flex align-items-center">
                              <input
                                type="text"
                                id="captcha"
                                value={captchaValue}
                                onChange={(e) =>
                                  setCaptchaValue(e.target.value)
                                }
                                className="fs-6 px-2"
                                style={{ fontFamily: "Arial, sans-serif" }}
                              />
                            </div>
                          </div>

                          <div className="text-start mb-4">
                            <button
                              type="submit"
                              className="btn btn-primary"
                            >
                              Log in
                            </button>
                          </div>
                          <div className="pb-4 text-start">
                            Forgot Password?{" "}
                            <Link onClick={handleForgotPassword}>
                              Click Here
                            </Link>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Login;
