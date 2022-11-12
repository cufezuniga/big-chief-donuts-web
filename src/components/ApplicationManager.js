import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import AssignPoints from './AssignPoints';
import RedeemPoints from './RedeemPoints';
import Home from './Home';


const ApplicationManager = () => {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assign" element={<AssignPoints />} />
        <Route path="/redeem" element={<RedeemPoints />} />
    </Routes>
    )
}

export default ApplicationManager;