import React, { useContext } from "react";
import Dashboard from "../Components/Dashboard";
// import Sidebar from "../Components/Sidebar/Sidebar";
import { AppContext } from "../Context/AppContext";
import Login from "./Login";

const Homepage = () => {
  const { adminLogin } = useContext(AppContext);

  return (
    <div
      className="container-fluid px-0"
      style={{ backgroundColor: "rgba(232, 235, 231)" }}
    >
      <div className="row mx-0">
        <div className="col-12 col-md-3 px-0 position-relative">
          {/* <Sidebar isVisible={isSidebarVisible} /> */}
        </div>
        <div className="col px-0 pb-5">
          <div className="py-5">{adminLogin ? <Dashboard /> : <Login />}</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
