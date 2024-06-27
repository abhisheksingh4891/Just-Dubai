import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GoogleLikes = () => {
  return (
    <div className="col-xl-4 mb-4">
      <div className="card card-social">
        <div className="card-body border-bottom">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <FontAwesomeIcon className="fs-2 text-danger" icon={faGooglePlus} />
            </div>
            <div className="col text-end">
              <h3>10,500</h3>
              <h5 className="text-c-blue mb-0">
                +5.9% <span className="text-muted">Total Likes</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center justify-content-center card-active">
            <div className="col-6">
              <h6 className="text-center mb-2">
                <span className="text-muted me-2">Target:</span>25,998
              </h6>
              <div className="progress">
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: '80%', height: '6px' }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div className="col-6">
              <h6 className="text-center mb-2">
                <span className="text-muted me-2">Duration:</span>900
              </h6>
              <div className="progress">
                <div
                  className="progress-bar progress-c-theme2"
                  role="progressbar"
                  style={{ width: '50%', height: '6px' }}
                  aria-valuenow="50"
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

export default GoogleLikes;
