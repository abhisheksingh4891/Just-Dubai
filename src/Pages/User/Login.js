import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Cookies from 'js-cookie';

// const baseURL = "http://localhost:1000";
const baseURL = "https://just-dubai-admin-backend.onrender.com";

const Login = () => {
  const { setAdminLogin } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    
      // if (!captchaValue && email.length>2 && password.length>2) {
      //   toast.error("Please complete the reCAPTCHA verification.");
      //   return;
      // }
      if (email.length>=6 && password.length>=6) {
        toast.info("Please Wait");
      }

    try {
      const response = await axios.post(`${baseURL}/api/login`, {
        email,
        password,
        captchaValue,
      });
      toast.success(response.data.message);
      // localStorage.setItem("admin", response.data.token);
      Cookies.set("admin", response.data.token, { expires: 1 })
      setTimeout(() => {
        setAdminLogin(true);
      }, 1000);
    } catch (error) {
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
    toast.info("Sending recovery email");
    try {
      await axios.post(`${baseURL}/api/users/forgotpassword`, {
        email,
      });
      toast.success("Recovery email sent successfully");
      setForgot(!forgot);
    } catch (error) {
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
            backgroundColor: "#f4f5f7",
            fontFamily: "Raleway",
            minHeight: "100vh",
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-8 col-sm-10 mb-5">
                <div className="card">
                  <div className="card-body py-4 px-md-5">
                    {forgot ? (
                      <>
                        <form onSubmit={handleForget}>
                          <h4 className="text-start">Forgot Password</h4>
                          <div className="form-outline mb-4 text-start pt-2">
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example30"
                            >
                              Email address
                            </label> */}
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
                            Enter your email to recieve reset password link.
                          </p>

                          <div className="text-start">
                            <button
                              type="submit"
                              className="btn btn-primary mb-4"
                            >
                              Reset Password
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary mb-4 ms-2"
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
                          {/* <h3 className="text-start">Login Here</h3> */}
                          <div className="form-outline mb-4 text-start">
                            <label
                              className="form-label"
                              htmlFor="form3Example3"
                            >
                              Email address
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

                          <div className="text-start mb-4">
                            <ReCAPTCHA
                              sitekey="6LewEwEqAAAAAPI5LkSy922omY0tKztZMYkLiq9l"
                              onChange={(e) => setCaptchaValue(e)}
                              className="mb-2"
                            />
                          <label className="mb-0">Please Verify You Are a Human</label>
                          </div>

                          <div className="text-start">
                            <button
                              type="submit"
                              className="btn btn-primary mb-4"
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
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
