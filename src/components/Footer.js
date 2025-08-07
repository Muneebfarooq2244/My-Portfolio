import React from 'react';
import Logo from "../components/assets/logo.png";
import { color } from 'framer-motion';
import Footercss from '../components/styles/Footer.css';

const Footer = () => {


  return (
    <footer className='footer'>
      <div className='Foot'>
        <img src={Logo} alt="Logo" className='logo'/>
                <div className='social-media1'>
          <div className="bg-icon1">
            <a href="https://www.facebook.com/mnyb.shykh.530642">
              <i className="bx bxl-facebook"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon1">
            <a href="https://www.instagram.com/muneeb6235/">
              <i className="bx bxl-instagram"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon1">
            <a href="https://www.linkedin.com/in/muneeb-farooq-775b6a228/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon1">
            <a href="https://github.com/Muneebfarooq123">
              <i className="bx bxl-github"></i>
            </a>
            <span></span>
          </div>
        </div>
        <p className='text'>
          Copyright © 2026 By <span>Muneeb Farooq </span>  .All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
