// Sucess.js
import React, { useState } from 'react';
import '../styles/sucess.css';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { TiTickOutline } from "react-icons/ti";
import { Outlet, useNavigate } from 'react-router-dom';

const Sucess = () => {
  const navigate = useNavigate();
  const [otpVerification, setOtpVerification] = useState(false);

  const handleContinue = () => {
    const isUserCreated = true;

    if (isUserCreated) {
      navigate('/post'); 
      setOtpVerification(true);
    } else {
      console.error('User creation failed.');
    }
  };

  return (
    <div className="sucess-user-container">
      <TiTickOutline className="tick-icon" />
      <h1 className="welcome-text">Account Created Successfully</h1>

      <button className="createbtn" onClick={handleContinue} disabled={otpVerification}>
        Create your First Post
        <IoArrowForwardOutline className="arrow-icon" />
      </button>
      <Outlet />
    </div>
  );
};

export default Sucess;