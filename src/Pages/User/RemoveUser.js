import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { AppContext } from "../../Context/AppContext";
// import "../User.css";

// const baseURL = "http://localhost:1000";
const baseURL = "https://just-dubai-admin-backend.onrender.com";

const RemoveUser = () => {
  const { adminLogin } = useContext(AppContext);
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    designation: "",
  });

  const getData = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/user/data`);
      const activeUsers = response.data.filter((user) => user.active === true);
      setUserProfile(activeUsers);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Add [] as dependency to run useEffect only once

  const handleRemove = (userId) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to remove this user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => removeUser(userId),
        },
        {
          label: "No",
          onClick: () => toast.info("User not removed"),
        },
      ],
    });
  };

  const removeUser = async (userId) => {
    try {
      await axios.put(`${baseURL}/api/user/deactivate/${userId}`);

      const updatedUserList = userProfile.map((user) =>
        user._id === userId ? { ...user, active: false } : user
      );

      toast.dismiss();
      toast.success("User deleted successfully");
      setUserProfile(updatedUserList);
      getData();
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to delete user");
      console.error("Error deactivating user:", error);
    }
  };

  const handleEdit = (userId) => {
    setEdit(true);
    setSelectedUserId(userId);
    const currentUser = userProfile.find((user) => user._id === userId);
    setUpdatedUserData({
      first: currentUser.first,
      last: currentUser.last,
      phone: currentUser.phone,
      email: currentUser.email,
      designation: currentUser.designation,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveEdit = async (userId) => {
    try {
      toast.info("Please wait");
      await axios.put(`${baseURL}/api/user/update/${userId}`, updatedUserData);

      toast.dismiss();
      toast.success("User Updated Successfully");
      setEdit(false);
      setSelectedUserId(null);
      getData();
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to update user");
      console.error("Error updating user:", error);
    }
  };

  const handleEditConfirm = (userId) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to change the details?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleSaveEdit(userId),
        },
        {
          label: "No",
          onClick: () => toast.info("User not removed"),
        },
      ],
    });
  };

  const handleCancelEdit = () => {
    setEdit(false);
    setSelectedUserId(null);
  };

  return (
    <>
      <div
        className="container-fluid px-0 d-flex flex-column min-vh-100"
        style={{ backgroundColor: "#EBF5FB" }}
      >
        <div className="row flex-grow-1 mx-0 h-100">
          {adminLogin && (
            <div
              className="col-12 col-md-2 px-0 position-relative"
              style={{ transition: "all 0.3s" }}
            >
              <Sidebar />
            </div>
          )}

          <div className="container" style={{ fontFamily: "Raleway" }}>
            <div className="row">
              <div className="col">
                <h3 className="text-center pt-5 mb-4">
                  <b>Active Users</b>
                </h3>
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h5 className="text-dark mt-3">Loading Users</h5>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      style={{ backgroundColor: "#f4f5f7" }}
                    >
                      <thead>
                        <tr>
                          <th>Employee ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Designation</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userProfile.map((user) => (
                          <tr key={user._id}>
                            <td
                              style={{ fontFamily: "none", fontSize: "17px" }}
                            >
                              {user.empId}
                            </td>
                            <td>
                              {edit && selectedUserId === user._id ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="first"
                                  value={updatedUserData.first}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                user.first
                              )}
                            </td>
                            <td>
                              {edit && selectedUserId === user._id ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="last"
                                  value={updatedUserData.last}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                user.last
                              )}
                            </td>
                            <td>
                              {edit && selectedUserId === user._id ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="phone"
                                  value={updatedUserData.phone}
                                  onChange={handleInputChange}
                                  style={{
                                    fontFamily: "none",
                                    fontSize: "17px",
                                  }}
                                />
                              ) : (
                                <div style={{ fontFamily: "none" }}>
                                  {user.phone}
                                </div>
                              )}
                            </td>
                            <td>
                              {edit && selectedUserId === user._id ? (
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  value={updatedUserData.email}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                user.email
                              )}
                            </td>
                            <td>
                              {edit && selectedUserId === user._id ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="designation"
                                  value={updatedUserData.designation}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                user.designation
                              )}
                            </td>
                            <td>
                              {edit && selectedUserId === user._id ? (
                                <>
                                  <button
                                    className="btn btn-primary me-2"
                                    onClick={() => handleEditConfirm(user._id)}
                                  >
                                    Save
                                  </button>
                                  <button
                                    className="btn btn-secondary"
                                    onClick={handleCancelEdit}
                                  >
                                    Cancel
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    className="btn btn-success me-2"
                                    onClick={() => handleEdit(user._id)}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => handleRemove(user._id)}
                                  >
                                    Remove
                                  </button>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
};

export default RemoveUser;
