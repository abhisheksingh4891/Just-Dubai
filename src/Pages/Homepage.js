import React, { useContext } from "react";
import Dashboard from "../Components/Dashboard";
import Sidebar from "../Components/Sidebar/Sidebar";
import { AppContext } from "../Context/AppContext";
import Login from "./User/Login";


const Homepage = () => {
  const { adminLogin, isSidebarVisible } = useContext(AppContext);

  return (
    <div className="container-fluid px-0 d-flex flex-column min-vh-100" style={{ backgroundColor: "rgba(232, 235, 231)" }}>
      <div className="row flex-grow-1 mx-0">
        <div className={`col-12 col-md-3 px-0 position-relative ${isSidebarVisible ? 'd-block' : 'd-none d-md-block'}`} style={{ transition: "all 0.3s" }}>
          <Sidebar isVisible={isSidebarVisible}/>
        </div>
        <div className="col px-0 pb-2">
          <div className="pt-3">{adminLogin ? <Dashboard /> : <Login />}</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
