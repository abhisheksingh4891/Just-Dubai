import React from 'react'
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer bg-dark" style={{height:"150px"}}>
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", width: "110px" }}
            className='text-center'
          />
        </Link>
    </div>
  )
}

export default Footer