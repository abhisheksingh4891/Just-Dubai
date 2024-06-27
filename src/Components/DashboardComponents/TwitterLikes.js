import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const TwitterLikes = () => {
  return (
    <div className="col-md-6 col-xl-4 mb-4">
      <div className="card card-social">
        <div className="card-body border-bottom">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <FontAwesomeIcon className="fs-2 text-dark" icon={faTwitter} />
            </div>
            <div className="col text-end">
              <h3>11,200</h3>
              <h5 className="text-purple mb-0">
                +6.2% <span className="text-muted">Total Likes</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center justify-content-center card-active">
            <div className="col-6">
              <h6 className="text-center mb-2">
                <span className="text-muted me-2">Target:</span>34,185
              </h6>
              <div className="progress">
                <div
                  className="progress-bar progress-c-green"
                  role="progressbar"
                  style={{ width: '40%', height: '6px' }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div className="col-6">
              <h6 className="text-center mb-2">
                <span className="text-muted me-2">Duration:</span>800
              </h6>
              <div className="progress">
                <div
                  className="progress-bar progress-c-blue"
                  role="progressbar"
                  style={{ width: '70%', height: '6px' }}
                  aria-valuenow="70"
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

export default TwitterLikes;
