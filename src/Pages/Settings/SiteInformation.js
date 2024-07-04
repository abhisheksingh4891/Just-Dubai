import React, { useContext } from "react";
import GeneralInfoSidebar from "../../Components/Sidebar/GeneralInfoSidebar";
import { AppContext } from "../../Context/AppContext";
import SiteData from "../../Components/Settings/GeneralSettings/SiteData";

const SiteInformation = () => {
  const { adminLogin } = useContext(AppContext);
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
              <GeneralInfoSidebar />
            </div>
          )}
          <div className="col px-0">
            <div className="content">
              <SiteData />
            </div>
            {/* <Footer/> */}
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
};

export default SiteInformation;
