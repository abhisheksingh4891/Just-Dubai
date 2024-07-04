import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://localhost:1000";

const ResetEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  //   const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.put(
          `${baseURL}/api/users/reset-email/${token}`
        );
        console.log("hello");
        if (response.data.message === "Email reset successful") {
          setMessage("Your email has been reset successfully.");
        } else {
          setMessage("Invalid or expired token.");
        }
      } catch (error) {
        setMessage("Invalid or expired token.");
      }
    };

    verifyToken();
  }, [token]);

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center p-5 h-100">
        <div
          className="card text-center p-3"
          style={{ width: "100%", maxWidth: "400px", fontFamily: "Raleway" }}
        >
          <div>
            <p>{message}</p>
            {message === "Your email has been reset successfully." && (
              <button className="btn btn-primary" onClick={handleRedirect}>Go to Homepage</button>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ResetEmail;
