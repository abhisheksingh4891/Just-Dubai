import React, { useContext } from "react";
import Dashboard from "../Components/Dashboard";
import Sidebar from "../Components/Sidebar/Sidebar";
import { AppContext } from "../Context/AppContext";
import Login from "./Login";

const Homepage = () => {
  const { isSidebarVisible, toggleSidebar, adminLogin } = useContext(AppContext);

  return (
    <div className="container-fluid px-0" style={{ backgroundColor: 'rgba(232, 235, 231)' }}>
      <div className="row mx-0">
        <div className="col-12 col-md-3 px-0 position-relative">
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </div>
        <div className="col px-0">
          <div className="p-4">
            {adminLogin ? (
              <Dashboard />
            ) : (
              <Login />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
