import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from "./views/Dashboard";
import Header from "./components/Header";
import LandingPage from "./LandingPage";
import Admin from "./components/Admin";

const App = () => {
  return (

    <div>
      <BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/browser" element={<Browser />} />
        </Routes>
      </BrowserRouter> */}
      <div className='app-section'>
        <div className="browser">
            <Header />
        <div className='viewport'>
                <Routes>
                    <Route path='/' element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/home" element={<Homepage />} /> */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/landing" element={<LandingPage />} />
                </Routes>
        </div>
        </div>
    </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
