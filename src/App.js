import React from 'react';
import './App.css';
import NavBar from './components/nav';
import Body from './components/body';
import CreateUser from './components/CreateUser';
import Login from './components/login';
import OTP from './components/Otp';
import Sucess from './components/successful';
import CreatePost from './components/CreatePost'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path="/post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;