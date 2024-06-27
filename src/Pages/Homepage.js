import React, { useContext } from "react";
import Dashboard from "../Components/Dashboard";
import { AppContext } from "../Context/AppContext";
import Login from "./User/Login";
import "../Components/Sidebar/Sidebar.css"; // Import the Sidebar.css file here to use the CSS classes

const Homepage = () => {
  const { adminLogin } = useContext(AppContext);

  return (
    <div className="main-content">
      <div>{adminLogin ? <Dashboard /> : <Login />}</div>
    </div>
  );
};

export default Homepage;
