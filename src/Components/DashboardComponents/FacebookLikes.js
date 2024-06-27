import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const FacebookLikes = () => {
  return (
    <div className="col-md-6 col-xl-4 mb-4">
      <div className="card card-social">
        <div className="card-body border-bottom">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <FontAwesomeIcon className="fs-2 text-primary" icon={faFacebook} />
            </div>
            <div className="col text-end">
              <h3>12,281</h3>
              <h5 className="text-c-green mb-0">
                +7.2% <span className="text-muted">Total Likes</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center justify-content-center card-active">
            <div className="col-6">
              <h6 className="text-center mb-2">
                <span className="text-muted me-2">Target:</span>35,098
              </h6>
              <div className="progress">
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "60%", height: "6px" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div className="col-6">
              <h6 className="text-center mb-2">
                <span className="text-muted me-2">Duration:</span>350
              </h6>
              <div className="progress">
                <div
                  className="progress-bar progress-c-theme2"
                  role="progressbar"
                  style={{ width: "45%", height: "6px" }}
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookLikes;
