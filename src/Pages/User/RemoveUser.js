import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert';
// import Sidebar from "../../Components/Sidebar/Sidebar";

const baseURL = "http://localhost:1000";

const RemoveUser = () => {
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
    empId:"",
  });

  useEffect(() => {
    getData();
  }, []);

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

  const handleRemove = (userId) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure you want to remove this user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => removeUser(userId)
        },
        {
          label: 'No',
          onClick: () => toast.info("User not removed")
        }
      ]
    });
  };

  const removeUser = async (userId) => {
    try {
      const response = await axios.put(
        `${baseURL}/api/user/deactivate/${userId}`
      );
      if (response.status === 200) {
        const updatedUserList = userProfile.map((user) =>
          user._id === userId ? { ...user, active: false } : user );
        setUserProfile(updatedUserList);
        toast.success("User deleted successfully");
        getData();
      }
    } catch (error) {
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
      const response = await axios.put(
        `${baseURL}/api/user/update/${userId}`,
        updatedUserData
      );
      if (response.status === 200) {
        toast.success("User Updated Successfully");
        setEdit(false);
        setSelectedUserId(null);
        getData();
      }
    } catch (error) {
      toast.error("Failed to update user");
      console.error("Error updating user:", error);
    }
  };

  const handleCancelEdit = () => {
    setEdit(false);
    setSelectedUserId(null);
  };

  return (
    <div>
      {/* <Sidebar /> */}
      <div style={{ backgroundColor: "#f4f5f7", fontFamily: "Raleway" }}>
        <div className="container">
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
            <div className="table-responsive" >
              <table className="table table-bordered table-striped">
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
                  {userProfile.map((user, index) => (
                    <tr key={index}>
                    <td>
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
                          />
                        ) : (
                          user.phone
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
                              onClick={() => handleSaveEdit(user._id)}
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default RemoveUser;
