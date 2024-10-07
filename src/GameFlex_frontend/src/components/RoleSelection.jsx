// src/components/RoleSelection.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const RoleSelection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-primary mb-4">Select Your Role</h2>
        <div className="flex justify-around">
          <Link to="/stadium-owner" className="bg-jungleGreen text-white font-semibold py-2 px-4 rounded">
            Stadium Owner
          </Link>
          <Link to="/team-manager" className="bg-secondary text-white font-semibold py-2 px-4 rounded">
            Team Manager
          </Link>
          <Link to="/fan" className="bg-accent text-white font-semibold py-2 px-4 rounded">
            Fan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
