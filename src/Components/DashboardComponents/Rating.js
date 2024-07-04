import { faCaretUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Rating = () => {
  return (
    <div className="col-md-6 col-xl-5 mb-4">
      <div className="card">
        <div className="card-header text-dark">
          <h5 className="card-title" style={{ fontFamily: "Raleway" }}>Rating</h5>
        </div>
        <div className="card-body" >
          <div className="row d-flex align-items-center justify-content-between mb-3">
            <div className="col-6 text-center">
              <h2 className="fw-light d-flex align-items-center justify-content-center m-0">
                4.7
                <FontAwesomeIcon className="fs-6 ml-2 text-warning" icon={faStar} />
              </h2>
            </div>
            <div className="col-6 text-center">
              <h6 className="fw-light d-flex align-items-center justify-content-center m-0">
                0.4 
                <FontAwesomeIcon className="text-success fs-6 ms-2 text-success" icon={faCaretUp} />
              </h6>
            </div>
          </div>

          <div className="row  d-flex flex-column gap-4">
            {[
              { stars: 5, count: 384, width: "70%" },
              { stars: 4, count: 145, width: "35%" },
              { stars: 3, count: 24, width: "25%" },
              { stars: 2, count: 1, width: "10%" },
              { stars: 1, count: 0, width: "0%" },
            ].map((rating, index) => (
              <div className="col-12" key={index}>
                <h6 className="d-flex align-items-center justify-content-between fw-light">
                  <span>
                    <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />{rating.stars}
                  </span>
                  <span>{rating.count}</span>
                </h6>
                <div className="progress my-2" style={{ height: "6px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: rating.width, background: "linear-gradient(127deg, #9055FF, #13E2DA)" }}
                    aria-valuenow={parseInt(rating.width)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
