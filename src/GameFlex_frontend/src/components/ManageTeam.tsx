// src/components/ManageTeam.jsx

import React from 'react';

const ManageTeam = () => {
  return (
    <div id="manageteam" className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Manage Team</h2>
      <div>
        <h3 className="font-bold">Team Overview</h3>
        <p>General stats and info about the team.</p>
      </div>
      <div>
        <h3 className="font-bold">Player Management</h3>
        <p>Options to manage players, trades, and contracts.</p>
      </div>
      <div>
        <h3 className="font-bold">Team Stats</h3>
        <p>Detailed statistics for team performance.</p>
      </div>
    </div>
  );
};

export default ManageTeam;
