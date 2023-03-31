import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Signup from './Signup';
import Login from './Login';
import Homepage from '../Homepage';
import Dashboard from '../views/Dashboard';

const Browser = () => {
  return (
    <div className='app-section'>
        <div className="browser">
            <Header />
        </div>
        <div className='viewport'>
                <Routes>
                    <Route path='/' element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
        </div>
    </div>
  )
}

export default Browser