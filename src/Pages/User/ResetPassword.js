import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const baseURL = "http://localhost:1000";
// const baseURL = "https://just-dubai-admin-backend.onrender.com";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { id, token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${baseURL}/api/users/reset-password/${id}/${token}`,
        { password }
      );
      setTimeout(() => {
        navigate("/");
      }, 800);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5 h-100">
      <div
        className="card text-center"
        style={{ width: "100%", maxWidth: "400px", fontFamily: "Raleway" }}
      >
        <div className="card-header h5 text-white bg-primary">
          Password Reset
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body px-5">
            <p className="card-text py-2">Enter your new password</p>
            <div className="form-outline">
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control my-3 shadow-none"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Reset password
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
