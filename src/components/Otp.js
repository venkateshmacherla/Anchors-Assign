// CreateUser.js
import React, { useState } from 'react';
import '../styles/otp.css';
import { IoRocketOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const OTP = () => {
  const navigate = useNavigate();
  const [sucessVerification, setSucessVerification] = useState(false);

  const handleContinue = () => {
    const isUserSucess = true;

    if (isUserSucess) {
      navigate('/sucess');
      setSucessVerification(true);
    } else {
      console.error('User failed.');
    }
  };

  return (
    <div className="otp-user-container">
      <IoRocketOutline className="rocket-icon" />
      <h1 className="welcome-text">Create Your Account</h1>

      <p>Please verify your email ID to continue. we have sent an OTP to this emailID </p>

      <div className="input-container">
        <input type="email" id="email" className="input-field" placeholder="OTP" />
      </div>

      <button className="createbtn" onClick={handleContinue} disabled={sucessVerification}>
        Continue
        <IoArrowForwardOutline className="arrow-icon" />
      </button>
    </div>
  );
};

export default OTP;