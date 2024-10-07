// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserAuthentication from './components/UseAuthentication';
import RoleSelection from './components/RoleSelection';
import Dashboard from '../src/components/Dashboard'
import StadiumDashboard from '../src/components/StadiumDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/authentication" element={<UserAuthentication />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/stadium/:stadiumId" element={<StadiumDashboard />} /> {/* Route for individual stadiums */}
      </Routes>
    </Router>
  );
};

export default App;
