import React from 'react';
import '../styles/bodystyle.css';
import { IoRocketOutline,IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="welcome-container">
      <div className="paraText">
      <IoRocketOutline className="rocket-icon" />
        <p >For Indian Users Only</p>
        </div>
      <div className='headingTitle'>
        <h1>Start Posting anonymously</h1>
        <h1>where no one will judge</h1>
      </div>
      <div className='paraText2'>
        <p>Welcome to Stranger discussion forum</p>
      </div>
      <div>
      <button className='createbtn'>
        <Link to= "/createuser" className='textColor'>
        Create Your Account
        <IoArrowForwardOutline className="arrow-icon" />
        </Link>
      </button>
      
      </div>
      <div>
      <p className="center-text">User already created? <Link to="/login" className="login-link">Login</Link></p> 
      </div>
    </div>
  );
}

export default Body;