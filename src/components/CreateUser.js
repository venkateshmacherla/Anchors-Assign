// CreateUser.js
import React, { useState } from 'react';
import '../styles/createUser.css';
import { IoRocketOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [userVerification, setuserVerification] = useState(false);

  const handleContinue = () => {
    const isUserCreated = true;

    if (isUserCreated) {
      navigate('/otp');
      setuserVerification(true);
    } else {
      console.error('User creation failed.');
    }
  };

  return (
    <div className="create-user-container">
      <IoRocketOutline className="rocket-icon" />
      <h1 className="welcome-text">Create Your Account</h1>

      <div className="input-container">
        <input type="text" id="name" className="input-field" placeholder="Enter Your Name" />
      </div>

      <div className="input-container">
        <input type="email" id="email" className="input-field" placeholder="Enter Email ID" />
      </div>

      <button className="createbtn" onClick={handleContinue} disabled={userVerification}>
        Continue
        <IoArrowForwardOutline className="arrow-icon" />
      </button>
    </div>
  );
};

export default CreateUser;