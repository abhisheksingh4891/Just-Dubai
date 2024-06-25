import React, { useContext } from "react";
import Subscribers from "./Subscribers";
import TotalPageViews from "./TotalPageViews";
import DailyPageViews from "./DailyPageViews";
import TotalPosts from "./TotalPosts";
import { AppContext } from "../Context/AppContext";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  const { isSidebarVisible } = useContext(AppContext);
  return (
    <div
      className="container-fluid px-0 d-flex flex-column min-vh-100"
      style={{ backgroundColor: "rgba(232, 235, 231)" }}
    >
      <div className="row flex-grow-1 mx-0">
        <div
          className={`col-12 col-md-3 px-0 position-relative ${
            isSidebarVisible ? "d-block" : "d-none d-md-block"
          }`}
          style={{ transition: "all 0.3s" }}
        >
          <Sidebar isVisible={isSidebarVisible} />
        </div>
        <div className="col px-0 pb-2">
          <div className="container p-3" style={{ height: "100%" }}>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <TotalPageViews />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <DailyPageViews />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <TotalPosts />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <Subscribers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
