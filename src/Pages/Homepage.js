import React, { useContext } from "react";
import Dashboard from "../Components/Dashboard";
import { AppContext } from "../Context/AppContext";
import Login from "./User/Login";

const Homepage = () => {
  const { adminLogin } = useContext(AppContext);

  return (
    <div
      className="container-fluid px-0 d-flex flex-column min-vh-100"
      style={{ backgroundColor: "rgba(232, 235, 231)" }}
    >
      <div>{adminLogin ? <Dashboard /> : <Login />}</div>
    </div>
  );
};

export default Homepage;
