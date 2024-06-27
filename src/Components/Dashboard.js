import React from "react";
import Subscribers from "./DashboardComponents/Subscribers";
import TotalPageViews from "./DashboardComponents/TotalPageViews";
import DailyPageViews from "./DashboardComponents/DailyPageViews";
import TotalPosts from "./DashboardComponents/TotalPosts";
// import FacebookLikes from "./DashboardComponents/FacebookLikes";
// import TwitterLikes from "./DashboardComponents/TwitterLikes";
// import GoogleLikes from "./DashboardComponents/GoogleLikes";
import Rating from "./DashboardComponents/Rating";

const Dashboard = () => {
 
  return (
    <div
      className="container-fluid px-0 d-flex flex-column min-vh-100"
      style={{ backgroundColor: "rgba(232, 235, 231)" }}
    >
      <div className="row flex-grow-1 mx-0">
        <div
          className={`col-12 col-md-3 px-0 position-relative`}
          style={{ transition: "all 0.3s" }}
        ></div>
        <div className="col px-0 pb-2 py-4 ">
          <div className="container p-3" style={{ height: "100%" }}>
            <div className="row">
              <TotalPageViews />
              <DailyPageViews />
              <TotalPosts />
              <Subscribers />
              <Rating />
            </div>
            <div className="roe"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
