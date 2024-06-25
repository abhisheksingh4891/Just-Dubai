import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from "../Assets/img1.jpg";

const Footer = () => {
  return (
    <div className="footer text-white p-3 bg-dark" style={{  fontFamily:'Raleway'}}>
      <div className="container">
        {/* <h1 className="text-center pt-5 mt-0">“</h1> */}
        {/* <p className="text-center pt-5 fs-5 fw-normal">If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.</p> */}
        <div className="row justify-content-center fs-3">
          <div className="col-auto">
            <Link to="/" className="social-icon  text-white"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon text-white"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon text-white"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon text-white"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon text-white"><i className="fa fa-google" aria-hidden="true"></i></Link>
          </div>
        </div>
        <h2 className="text-center fs-6 pt-4">Copyright @ 2024. Created by Just Dubai</h2>
      </div>
    </div>
  );
}

export default Footer;